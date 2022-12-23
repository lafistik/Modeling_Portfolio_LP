const btns = document.querySelectorAll(".icon-mobile-nav");
const header = document.querySelector("header");
const heroSection = document.querySelector(".hero-section");
const body = document.querySelector("body");
const menuEl = document.querySelectorAll(".menu-el");

btns.forEach(function (button) {
  button.addEventListener("click", function () {
    header.classList.toggle("nav-open");
  });
});

menuEl.forEach(function (el) {
  el.addEventListener("click", function () {
    header.classList.remove("nav-open");
  });
});

const handler = (entries) => {
  console.log(entries);

  if (entries[0].isIntersecting) {
    body.style.paddingTop = 0;
    header.classList.remove("sticky");
  } else {
    body.style.paddingTop = header.offsetHeight + "px";
    header.classList.add("sticky");
  }
};

const observer = new window.IntersectionObserver(handler);
observer.observe(heroSection);
