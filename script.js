// const divInstall = document.getElementById("installContainer");
// const butInstall = document.getElementById("butInstall");

/* Put code here */

/* Only register a service worker if it's supported */
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/exploreblitar.github.io/service-worker.js");
}

/**
 * Warn the page must be served over HTTPS
 * The `beforeinstallprompt` event won't fire if the page is served over HTTP.
 * Installability requires a service worker with a fetch event handler, and
 * if the page isn't served over HTTPS, the service worker won't load.
 */
// if (window.location.protocol === "http:") {
//   const requireHTTPS = document.getElementById("requireHTTPS");
//   const link = requireHTTPS.querySelector("a");
//   link.href = window.location.href.replace("http://", "https://");
//   requireHTTPS.classList.remove("hidden");
// }

/**
 * Warn the page must not be served in an iframe.
 */
// if (window.self !== window.top) {
//   const requireTopLevel = document.getElementById("requireTopLevel");
//   const link = requireTopLevel.querySelector("a");
//   link.href = window.location.href;
//   requireTopLevel.classList.remove("hidden");
// }
