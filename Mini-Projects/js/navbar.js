const btnNavBar = document.querySelector(".btn-navbar");
const links = document.querySelector(".links");

btnNavBar.addEventListener("click", function () {
    links.classList.toggle("show-links");
});
