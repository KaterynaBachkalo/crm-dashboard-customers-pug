const menuItems = document.querySelectorAll(".menu-link");

const currentPath = window.location.pathname; 

const checkCurrentMenuLink = () => {
  menuItems.forEach((item) => {

    const clickPath = item.getAttribute("href").replace('./', '/');

    if (clickPath === currentPath) {
      item.classList.add("current"); 
    } else {
      item.classList.remove("current"); 
    }
  });
};

document.addEventListener("DOMContentLoaded", checkCurrentMenuLink);

menuItems.forEach((item) => {
  item.addEventListener("click", (e) => {   
    const clickPath = item.getAttribute("href").replace('./', '/');

    if (currentPath === clickPath) {
      e.preventDefault();
    }
    
    checkCurrentMenuLink(); 
  });
});



