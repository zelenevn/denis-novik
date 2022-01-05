
const sections = document.querySelectorAll("section");
// const header = document.querySelector("header");
const footer = document.querySelector("footer");
const links = document.querySelectorAll(".menu__link");
let areas = [...sections, footer];
const activeLinkClass = "menu__link_active";
const browserHeight = window.innerHeight;

function changeActiveLink(target) {
  clearLinks();
  target.classList.add(activeLinkClass);
};

function clearLinks() {
  links.forEach(link => {
    link.classList.remove(activeLinkClass);
  });
}

// links.forEach(link => {
//   link.addEventListener("click", (event) => {
//     changeActiveLink(event.target);
//   });
// });

window.addEventListener("scroll", () => {
  areas.forEach((area, index) => {
    if (window.pageYOffset > area.offsetTop - browserHeight / 2 && window.pageYOffset < area.offsetTop + area.offsetHeight + browserHeight / 2) {
      changeActiveLink(links[index]);
    }
  });
});