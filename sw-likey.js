// TODO: this is absolutely broken
// the service worker doesn't seem to log anything...? Needs to execute hidey func
// shipping anyways

console.log(chrome, "CHROMECHROMECHROME");

chrome.webRequest.onBeforeRequest.addListener(
  /**
   * Listener function that detects when a POST request is made to a specific URL, and then performs an action.
   *
   * @param {object} details - An object that contains details about the request being made, including the request method, URL, and request body (if any).
   *
   * @returns {void}
   */
  function (details) {
    console.log("function received", details);
    if (
      details.method === "POST" &&
      details.url === "https://www.linkedin.com/li/track"
    ) {
      console.log("POST request to https://www.linkedin.com/li/track");
      // hidey();
    }
  },
  { urls: ["<all_urls>"] },
  ["requestBody"]
);
