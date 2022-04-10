let btn = document.querySelector(".form__btn"),
  popup = document.querySelector(".popup"),
  popupCross = document.querySelector(".popup__cross"),
  popupBtn = document.querySelector(".popup__btn"),
  inputs = document.querySelectorAll(".form__input");

btn.addEventListener("click", (e) => {
  e.preventDefault;
  inputs.forEach((input) => {
    if (input.value !== "") {
      input.classList.remove("not_full");
      popup.style.display = "flex";
      document.body.style.overflow = "hidden";
      input.value = "";
    } else {
      input.classList.add("not_full");
      popup.style.display = "none";
      return false;
    }
  });
});

popup.addEventListener("click", (e) => {
  let target = e.target;
  if (target === popupCross || target === popupBtn) {
    popup.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

let burger = document.querySelector(".header__menu"),
  navBar = document.querySelector(".header__list"),
  navLinks = document.querySelectorAll(".header__link"),
  header = document.querySelector(".header");

burger.addEventListener("click", () => {
  navBar.classList.toggle("active__nav");
  burger.classList.toggle("active__burger");
  header.classList.toggle("active__header");

  document.body.classList.toggle("active__body");
});

window.addEventListener("resize", function () {
  if (window.matchMedia("(min-width: 1024px)").matches) {
    navBar.classList.remove("active__nav");
    burger.classList.remove("active__burger");
    header.classList.remove("active__header");
    document.body.classList.remove("active__body");
  }
});

navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active__nav");
    burger.classList.remove("active__burger");
    header.classList.remove("active__header");
    document.body.classList.remove("active__body");
  });
});
