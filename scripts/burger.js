const burgerButton = document.querySelector(".burger__icon");
const closeButton = document.querySelector(".burger__close");
const burgerLinks = document.querySelectorAll(".burger__link");
const burger = document.querySelector(".burger__page");

function showBurger() {
  burger.classList.remove("burger__page_hidden");
};

function hideBurger() {
  burger.classList.add("burger__page_hidden");
};

burgerButton.addEventListener("click", () => {
  showBurger();
}); 

closeButton.addEventListener("click", () => {
  hideBurger();
});

burgerLinks.forEach(burgerLink => {
  burgerLink.addEventListener("click", () => {
    hideBurger();
  });
});