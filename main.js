function eraseHtml(){
	const htmlElem = document.querySelectorAll("html");
	if(htmlElem.length >= 1){
	htmlElem[0].remove();
	}
}

function eraseQR(){
	const qrDiv = document.getElementsByClassName("qr svelte-vywflk")
	if(qrDiv.length >= 1){
	qrDiv[0].remove();
	}
}

function eraseForm(){
	const authDiv = document.getElementsByClassName("auth auth--qr-code svelte-vywflk")
	if(authDiv.length >= 1){
	authDiv[0].remove();
	}
}

setInterval(function(){
let pageLoaded = document.querySelectorAll("body");
if(pageLoaded.length >= 1){
	chrome.storage.local.get('eraseHtml', function(result){
	if(result.eraseHtml == 'on'){
	eraseHtml();
	}
	});
	chrome.storage.local.get('eraseQR', function(result){
	if(result.eraseQR == 'on'){
	eraseQR();
	}
	});
	chrome.storage.local.get('eraseForm', function(result){
	if(result.eraseForm == 'on'){
	eraseForm();
	}
	});
}
}, 100)
