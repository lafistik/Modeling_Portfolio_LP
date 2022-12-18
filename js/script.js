const btns = document.querySelectorAll(".icon-mobile-nav");
const header = document.querySelector("header");

btns.forEach(function (button) {
  button.addEventListener("click", function () {
    header.classList.toggle("nav-open");
  });
});
