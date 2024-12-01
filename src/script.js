// const menuBtn = document.querySelector(".toggle-icon");
// const toggleBtnClose = document.querySelector(".close");
// const openMenu = document.querySelector(".menu");

// menuBtn.addEventListener("click", function () {
//     openMenu.classList.add("active");
// });

// toggleBtnClose.addEventListener("click", function () {
//     openMenu.classList.remove("active");
// });

window.addEventListener("scroll", function () {
    const header = document.querySelector('body');
    header.classList.toggle("sticky", window.scrollY > 50);
});
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
