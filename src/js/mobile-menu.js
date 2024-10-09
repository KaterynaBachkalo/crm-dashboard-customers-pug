const mobileMenu = document.querySelector(".js-menu");
const openMenuBtn = document.querySelector(".js-menu-open");
const closeMenuBtn = document.querySelector(".js-menu-close");
const menuBtn = document.querySelectorAll(".menu-link");
const sidebar = document.querySelector(".js-menu");
const tableWrap = document.querySelector(".table-data");
const table = document.querySelector(".table");

const toggleMenu = () => {
  const isMenuOpen =
  openMenuBtn.getAttribute("aria-expanded") === true || false;
  openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
  mobileMenu.classList.toggle("is-open");
};

const openMenu = () => {
  if (!tableWrap || !table) {
    return
  }
  
  tableWrap.classList.add("hidden");
  table.classList.add("hidden");
};

const closeMenu = () => {
  if (!tableWrap || !table) {
    return
  }

  if (tableWrap.classList.contains("hidden")) {
    tableWrap.classList.remove("hidden");
    table.classList.remove("hidden");
  }
};


openMenuBtn.addEventListener("click", () => {
  toggleMenu();
  openMenu();
});
closeMenuBtn.addEventListener("click", () => {
  toggleMenu();
  closeMenu();
});

menuBtn.forEach((item) => {
  item.addEventListener("click", () => {
    if (mobileMenu.classList.contains("is-open")) {
      mobileMenu.classList.remove("is-open");
      closeMenu(); 
    }
  });
});

window.matchMedia("(min-width: 1440px)").addEventListener("change", (e) => {
  if (!e.matches) return;
  mobileMenu.classList.remove("is-open");
  openMenuBtn.setAttribute("aria-expanded", false);
});
