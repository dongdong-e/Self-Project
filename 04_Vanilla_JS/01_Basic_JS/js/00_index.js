const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

// className
// function handleClick() {
//   const currentClass = title.className;
//   if (currentClass !== CLICKED_CLASS) {
//     title.className = CLICKED_CLASS;
//   } else {
//     title.className = "";
//   }
// }

// classList.remove / classList.add
// function handleClick() {
//   const hasClass = title.classList.contains(CLICKED_CLASS);
//   if (hasClass) {
//     title.classList.remove(CLICKED_CLASS);
//   } else {
//     title.classList.add(CLICKED_CLASS);
//   }
// }

// toggle
function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}

init();
