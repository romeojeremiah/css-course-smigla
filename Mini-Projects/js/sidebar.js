const btnSideBar = document.querySelector(".btn-main");
const btnNavBar = document.querySelector(".btn-navbar");
const sideBar = document.querySelector(".nav");

btnSideBar.addEventListener("click", function () {
    sideBar.classList.toggle("show-nav");
});
btnNavBar.addEventListener("click", function () {
    sideBar.classList.remove("show-nav");
});
