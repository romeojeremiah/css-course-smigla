const btnOpen = document.querySelector(".btn-open");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".btn-close");

btnOpen.addEventListener("click", function () {
    overlay.style.visibility = "visible";
});
btnClose.addEventListener("click", function () {
    overlay.style.visibility = "hidden";
});
