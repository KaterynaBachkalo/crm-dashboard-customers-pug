const mobileMenu = document.querySelector(".js-menu");
const openMenuBtn = document.querySelector(".js-menu-open");
const closeMenuBtn = document.querySelector(".js-menu-close");
const menuBtn = document.querySelectorAll(".menu-link");
const sidebar = document.querySelector(".js-menu");
const tableWrap = document.querySelector(".table-data");
const table = document.querySelector(".table");

const toggleMenu = () => {
  const isMenuOpen =
    openMenuBtn.getAttribute("aria-expanded") === "true" || false;
  openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
  mobileMenu.classList.toggle("is-open");
};

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);
menuBtn.forEach((item) => {
  item.addEventListener("click", toggleMenu);
});

window.matchMedia("(min-width: 1440px)").addEventListener("change", (e) => {
  if (!e.matches) return;
  mobileMenu.classList.remove("is-open");
  openMenuBtn.setAttribute("aria-expanded", false);
});

const openSidebar = () => {
  sidebar.classList.add("is-open");
  tableWrap.classList.add("hidden");
  table.classList.add("hidden");
};

const closeSidebar = () => {
  sidebar.classList.remove("is-open");
  tableWrap.classList.remove("hidden");
  table.classList.remove("hidden");
};

openMenuBtn.addEventListener("click", openSidebar);
closeMenuBtn.addEventListener("click", closeSidebar);
