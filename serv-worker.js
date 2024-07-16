// // Insalls the service worker
// addEventListener("install", (e) => {
// 	// it runs only once
// 	console.log("Installing service worker...");
// });

// // Verify that the service worker is active
// addEventListener("activate", () => {
// 	console.log("The service worker is active!");
// });

// // It handles the errors
// addEventListener("error", (e) => {
// 	//...
// });

// // It runs evry time the client actulice the navigator
// addEventListener("fetch", (e) => {
// 	console.log("Service worker intersecting the request!");
// });

// addEventListener("message", (e) => {
// 	console.log("The service worker received the message from main.js!");
// 	console.log(e.data);
// 	e.source.postMessage("Hello, I am the service worker");
// });

// *********************************************************************
let cacheVersion = "cache 2";

addEventListener("install", (e) => {
	console.log("Service worker installed");
	caches.open(cacheVersion).then((cache) => {
		cache
			.add("index.html")
			.then((res) => {
				console.log(
					"The information has been successfully added to the cache!"
				);
			})
			.catch((err) => {
				console.log(err);
			});
	});
});

addEventListener("activate", () => {
	caches.keys().then((key) => {
		return Promise.all(
			key.map((cache) => {
				if (cache !== cacheVersion) {
					console.log("The old version of the cache has been deleted!");
					return caches.delete(cache);
				}
			})
		);
	});
});

addEventListener("fetch", (e) => {
	e.respondWith(async () => {
		const responseInCache = await caches.match(e.request);
		if (responseInCache) return responseInCache;
		return e.request;
	});
});
