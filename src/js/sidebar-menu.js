const menuItems = document.querySelectorAll(".menu-link");


const currentPath = window.location.pathname;
console.log("currentPath:", currentPath);

let updateCurrentPath;

if (currentPath.includes("/crm-dashboard-customers-pug/")) {
  updateCurrentPath = currentPath.replace("/crm-dashboard-customers-pug/", "/")
} else {
  updateCurrentPath = currentPath;
}

console.log("updateCurrentPath:", updateCurrentPath);


const checkCurrentMenuLink = () => {
  menuItems.forEach((item) => {

    const clickPath = item.getAttribute("href").replace('./', '/');
    console.log("clickPath1:", clickPath);

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
    console.log("clickPath2:", clickPath);

    if (updateCurrentPath === clickPath) {
      e.preventDefault();
    }
    
    checkCurrentMenuLink(); 
  });
});



