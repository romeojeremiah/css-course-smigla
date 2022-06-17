const btnOpen = document.querySelectorAll(".btn-open");
const btnClose = document.querySelectorAll(".btn-close");
const answer = document.querySelector(".answer");

btnOpen.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        answer.classList.toggle("show-answer");
    });
});
