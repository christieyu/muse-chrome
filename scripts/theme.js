console.log("outside theme.js");

document.forms.theme.onsubmit = function(e) {

	console.log("inside");

	if (!document.getElementById('themebackground1').value) {
		alert('You must choose a primary theme!');
		return false;
	};

	if (!document.getElementById('themebackground2').value) {
		alert('You must choose a secondary theme!');
		return false;
	};

	if (!document.getElementById('themeborder').value) {
		alert('You must choose a border color!');
		return false;
	};

	if (!document.getElementById('themefont').value) {
		alert('You must choose a font!');
		return false;
	};

	if (!document.getElementById('themefontcolor').value) {
		alert('You must choose a font color!');
		return false;
	};

	var themebackground1 = document.getElementById('themebackground1').value;
	console.log("themebackground1: " + themebackground1);
	chrome.storage.sync.set({'themebackground1': themebackground1});

	var themebackground2 = document.getElementById('themebackground2').value;
	console.log("themebackground2: " + themebackground2);
	chrome.storage.sync.set({'themebackground2': themebackground2});

	var themeborder = document.getElementById('themeborder').value;
	console.log("themeborder: " + themeborder);
	chrome.storage.sync.set({'themeborder': themeborder});

	var themefont = document.getElementById('themefont').value;
	console.log("font: " + themefont);
	chrome.storage.sync.set({'themefont': themefont});

	var themefontcolor = document.getElementById('themefontcolor').value;
	console.log("font color: " + themefontcolor);
	chrome.storage.sync.set({'themefontcolor': themefontcolor});

}