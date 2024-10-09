const menuItems = document.querySelectorAll(".menu-link");


const currentPath = window.location.pathname;

let updateCurrentPath;

if (currentPath.includes("/crm-dashboard-customers-pug/")) {
  updateCurrentPath = currentPath.replace("/crm-dashboard-customers-pug/", "/")
} else {
  updateCurrentPath = currentPath;
}


const checkCurrentMenuLink = () => {
  menuItems.forEach((item) => {

    const clickPath = item.getAttribute("href").replace('./', '/');

    if (clickPath === updateCurrentPath) {
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

    if (updateCurrentPath === clickPath) {
      e.preventDefault();
    }
    
    checkCurrentMenuLink(); 
  });
});



