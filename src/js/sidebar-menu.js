const menuItems = document.querySelectorAll(".menu-link");

const currentPath = window.location.pathname; 
console.log("currentPath:", currentPath);

const checkCurrentMenuLink = () => {
  menuItems.forEach((item) => {

    const clickPath = item.getAttribute("href").replace('./', '/');
    console.log("clickPath1:", clickPath);

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
    console.log("clickPath2:", clickPath);

    if (currentPath === clickPath) {
      e.preventDefault();
    }
    
    checkCurrentMenuLink(); 
  });
});



