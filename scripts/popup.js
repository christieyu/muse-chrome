document.forms.home.onsubmit = function(e) {
	if (!document.getElementById('username').value) {
		alert('You must provide your name!');
		return false;
	}

	var username = document.getElementById('username').value;
	chrome.storage.sync.set({'username': username});
}