(() => {
  const mobileMenu = document.querySelector(".js-menu");
  const openMenuBtn = document.querySelector(".js-menu-open");
  const closeMenuBtn = document.querySelector(".js-menu-close");
  const menuBtn = document.querySelectorAll(".menu-link");

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
})();

// Отримуємо елементи
const sidebar = document.querySelector(".sidebar");
const body = document.querySelector(".page");
const main = document.querySelector(".main");
const openMenuBtn = document.querySelector(".js-menu-open");
const closeMenuBtn = document.querySelector(".js-menu-close");

function toggleSidebar() {
  if (sidebar.classList.contains("is-open")) {
    body.classList.add("body-no-scroll");
    main.classList.add("body-no-scroll");
  } else {
    body.classList.remove("body-no-scroll");
    main.classList.remove("body-no-scroll");
  }
}

closeMenuBtn.addEventListener("click", toggleSidebar);
openMenuBtn.addEventListener("click", toggleSidebar);
