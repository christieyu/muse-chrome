document.forms.bookmarks.onsubmit = function(e) {

	if (document.getElementById('text1').value !== null) {
		chrome.storage.sync.set({'text1': document.getElementById('text1').value});
	}

	if (document.getElementById('text2').value !== null) {
		chrome.storage.sync.set({'text2': document.getElementById('text2').value});
	}

	if (document.getElementById('text3').value !== null) {
		chrome.storage.sync.set({'text3': document.getElementById('text3').value});
	}

	if (document.getElementById('text4').value !== null) {
		chrome.storage.sync.set({'text4': document.getElementById('text4').value});
	}

	if (document.getElementById('text5').value !== null) {
		chrome.storage.sync.set({'text5': document.getElementById('text5').value});
	}

	if (document.getElementById('text6').value !== null) {
		chrome.storage.sync.set({'text6': document.getElementById('text6').value});
	}

	if (document.getElementById('text7').value !== null) {
		chrome.storage.sync.set({'text7': document.getElementById('text7').value});
	}

	if (document.getElementById('text8').value !== null) {
		chrome.storage.sync.set({'text8': document.getElementById('text8').value});
	}

	if (document.getElementById('text9').value !== null) {
		chrome.storage.sync.set({'text9': document.getElementById('text9').value});
	}

	if (document.getElementById('text10').value !== null) {
		chrome.storage.sync.set({'text10': document.getElementById('text10').value});
	}

	if (document.getElementById('link1').value !== null) {
		chrome.storage.sync.set({'link1': document.getElementById('link1').value});
	}

	if (document.getElementById('link2').value !== null) {
		chrome.storage.sync.set({'link2': document.getElementById('link2').value});
	}

	if (document.getElementById('link3').value !== null) {
		chrome.storage.sync.set({'link3': document.getElementById('link3').value});
	}

	if (document.getElementById('link4').value !== null) {
		chrome.storage.sync.set({'link4': document.getElementById('link4').value});
	}

	if (document.getElementById('link5').value !== null) {
		chrome.storage.sync.set({'link5': document.getElementById('link5').value});
	}

	if (document.getElementById('link6').value !== null) {
		chrome.storage.sync.set({'link6': document.getElementById('link6').value});
	}

	if (document.getElementById('link7').value !== null) {
		chrome.storage.sync.set({'link7': document.getElementById('link7').value});
	}

	if (document.getElementById('link8').value !== null) {
		chrome.storage.sync.set({'link8': document.getElementById('link8').value});
	}

	if (document.getElementById('link9').value !== null) {
		chrome.storage.sync.set({'link9': document.getElementById('link9').value});
	}

	if (document.getElementById('link10').value !== null) {
		chrome.storage.sync.set({'link10': document.getElementById('link10').value});
	}
}