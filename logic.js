//function to execute on window load

window.onload = function () {
	try {
		var isRedirect = false;
		var redirectLink = "";

		var s = window.location.href;
		var hash = s.substring(s.lastIndexOf('/') + 1, s.length).toLowerCase();

		var redirects = getRedirects();
		for(var i = 0; i < redirects.length; i++) {
			if (hash === redirects[i].name) {
				isRedirect = true;
				redirectLink = redirects[i].link;
			}
		}

		if (isRedirect) {
			window.location = redirectLink;
		} else {
			window.location = "http://adamgincel.com";
		}
	} catch (e) {
		window.location = "http://adamgincel.com";
	}
};
