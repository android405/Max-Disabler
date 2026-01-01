document.addEventListener('DOMContentLoaded', () => {
	const eraseHtml = document.getElementById("eraseHtml")
	const eraseQR = document.getElementById("eraseQR")
	const eraseForm = document.getElementById("eraseForm")
	const saveBtn = document.getElementById("save")
	
	chrome.storage.local.get("eraseHtml", (result) => {
		if(result.eraseHtml == 'on'){
			eraseHtml.setAttribute("checked", "");
	}
});
	chrome.storage.local.get("eraseQR", (result) => {
		if(result.eraseQR == 'on'){
			eraseQR.setAttribute("checked", "");
	}
});
	chrome.storage.local.get("eraseForm", (result) => {
		if(result.eraseForm == 'on'){
			eraseForm.setAttribute("checked", "");
	}
});
	saveBtn.addEventListener('click', () => {
		chrome.tabs.update(null, { url: "https://web.max.ru" });
		window.close();
		if(eraseHtml.checked){
			chrome.storage.local.set({"eraseHtml": eraseHtml.value});
		}else{
			chrome.storage.local.set({"eraseHtml": 'off'});
		}
		if(eraseQR.checked){
			chrome.storage.local.set({"eraseQR": eraseQR.value});
		}else{
			chrome.storage.local.set({"eraseQR": 'off'});
		}
		if(eraseForm.checked){
			chrome.storage.local.set({"eraseForm": eraseForm.value});
		}else{
			chrome.storage.local.set({"eraseForm": 'off'});
		}
	});
});