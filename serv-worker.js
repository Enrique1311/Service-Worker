// Insalls the service worker
addEventListener("install", (e) => {
	// it runs only once
	console.log("Installing service worker...");
});

// Verify that the service worker is active
addEventListener("activate", () => {
	console.log("The service worker is active!");
});

// It handles the errors
addEventListener("error", (e) => {
	//...
});

// It runs evry time the client actulice the navigator
addEventListener("fetch", (e) => {
	console.log("Service worker intersecting the request!");
});

addEventListener("message", (e) => {
	console.log("The service worker received the message from main.js!");
	console.log(e.data);
});
