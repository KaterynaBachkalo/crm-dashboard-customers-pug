const menuItems = document.querySelectorAll(".menu-link");

const setActiveMenuLink = () => {
  const currentPath = window.location.pathname;

  menuItems.forEach((item) => {
    const itemHref = new URL(item.getAttribute("href"), window.location.origin).pathname;

    if (itemHref === currentPath) {
      item.classList.add("current");
    } else {
      item.classList.remove("current");
    }
  });
};

document.addEventListener("DOMContentLoaded", setActiveMenuLink);

menuItems.forEach((item) => {
  item.addEventListener("click", setActiveMenuLink);
});

