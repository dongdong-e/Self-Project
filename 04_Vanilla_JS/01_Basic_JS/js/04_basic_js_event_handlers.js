const title = document.querySelector("#title");

function handleClick() {
  title.style.color = "powderblue";
}

function handleResize() {
  console.log("I have been resized.");
}

// handleResize(): Run right now
// handleResize: Run when I want to something.
window.addEventListener("resize", handleResize);
window.addEventListener("click", handleClick);
