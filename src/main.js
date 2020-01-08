import './css/index.scss'


let burgerMenus = document.querySelectorAll(".burger_menu-button");
burgerMenus.forEach(burgerMenu => {
  burgerMenu.addEventListener("click", () => {
    burgerMenu.parentNode.classList.toggle("active");
  });
})



let navtab = document.querySelector("nav.navtab");

let  navtabItems = document.querySelectorAll("li.navtab-item");
console.log(navtabItems)

navtabItems.forEach((navtabItem, activeIndex) => {
  navtabItem.addEventListener("click", () => {
    navtabItems.forEach(navtabItem => navtabItem.classList.remove("active"));
    navtabItem.classList.add("active");
    navtab.style.setProperty(
      "--active-index",
      `${activeIndex}`
    );
  })
})
