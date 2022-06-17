const btnOpen = document.querySelectorAll(".btn-open");
const btnClose = document.querySelector(".btn-close");
const answer = document.querySelector(".answer");

btnOpen.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        console.log(e.currentTarget);
        answer.classList.toggle("show-answer");
    });
});

btnClose.addEventListener("click", function () {
    overlay.style.visibility = "hidden";
});
