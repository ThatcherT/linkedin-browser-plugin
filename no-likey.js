// let localChrome = window.chrome
var postsHidden = 0;
function hidey() {
  {
    let classes = [
      "update-components-text-view",
      "white-space-pre-wrap",
      "break-words",
    ];
    let elements = document.querySelectorAll(
      // lmao
      classes.map((c) => `.${c}`).join("")
    );
    elements.forEach((e) => {
      // get all span children, print
      let spans = e.querySelectorAll("span");
      spans.forEach((s) => {
        // if it contains the word this
        if (s.innerHTML.includes("this")) {
          postsHidden++;
          parent_classes = ["feed-shared-update-v2"];
          let parent = e.closest(parent_classes.map((c) => `.${c}`).join(""));
          // 2 second fade out
          parent.style.transition = "opacity 2s";
          parent.style.opacity = 0;
          parent.style.color = "red";

          // Hide the element after the transition is complete
          setTimeout(() => {
            parent.style.display = "none";
            // remove from DOM
            parent.remove();
          }, 1000);
        }
      });
    });
  }
  console.log("posts hidden: ", postsHidden);
}

window.onload = function () {
  console.log("loaded :*");
  // rerun every 2 seconds
  setInterval(() => hidey(), 2000);
};
