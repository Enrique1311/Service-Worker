// The service worker works in the background of your computer. If you don't have connection to internet, it runs the same

if (navigator.serviceWorker) {
	navigator.serviceWorker.register("serv-worker.js"); // It registers a service worker
} else {
	console.log("Your browser does not support service worker!");
}

navigator.serviceWorker.ready.then((res) =>
	res.active.postMessage("Hello, world!")
);