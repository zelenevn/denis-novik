
const links = document.querySelectorAll(".menu__link");
const activeLinkClass = "menu__link_active";

function changeActiveLink(target) {
  links.forEach(element => {
    element.classList.remove(activeLinkClass);
  });
  target.classList.add(activeLinkClass);
};

links.forEach(link => {
  link.addEventListener("click", (event) => {
    changeActiveLink(event.target);
  });
});