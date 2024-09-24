const menuItems = document.querySelectorAll(".menu-link");

menuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    menuItems.forEach((link) => link.classList.remove("current"));

    this.classList.add("current");
  });
});
