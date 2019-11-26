document.forms.notes.onsubmit = function(e) {

	if (document.getElementById('notes').value !== null) {
		chrome.storage.sync.set({'notes': document.getElementById('notes').value});
	}

}