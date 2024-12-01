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