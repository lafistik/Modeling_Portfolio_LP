const btns = document.querySelectorAll(".icon-mobile-nav");
const header = document.querySelector("header");
const heroSection = document.querySelector(".hero-section");
const body = document.querySelector("body");
const menuEl = document.querySelectorAll(".menu-el");
const images = document.querySelectorAll("img");
const popup = document.querySelector(".popup-img");
const closeBtn = document.querySelector(".popup-img span");

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

images.forEach((image) => {
  image.onclick = () => {
    popup.style.display = "block";
    document.querySelector(".popup-img img").src = image.getAttribute("src");
  };
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
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

let options = {
  threshold: 0.1,
};

const observer = new window.IntersectionObserver(handler, options);
observer.observe(heroSection);
