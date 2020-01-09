import './css/index.scss'


let burgerMenus = document.querySelectorAll(".burger_menu-button");
burgerMenus.forEach(burgerMenu => {
  burgerMenu.addEventListener("click", () => {
    burgerMenu.parentNode.classList.toggle("active");
  });
})


let navtab = document.querySelector("nav.navtab");
let  navtabItems = document.querySelectorAll("li.navtab-item");
navtabItems.forEach((navtabItem, activeIndex) => {
  navtabItem.addEventListener("click", () => {
    navtabItems.forEach(navtabItem => navtabItem.classList.remove("active"));
    navtabItem.classList.add("active");
    navtab.style.setProperty("--active-index",activeIndex);
  })
})


let worldDoms = document.querySelectorAll('.world_item');
worldDoms.forEach(worldDom => {
  let worldNumber = worldDom.textContent.length;
  worldDom.style.setProperty('--world-number', worldNumber);
})


// 文字特效案例三
let worldItem3 = document.querySelector(".world_item3");
let arr = worldItem3.textContent.split('');
worldItem3.textContent = ' ';
let arrIndex = 0;
setInterval(() => {
  arrIndex++;
  worldItem3.textContent = arr.slice(0, arrIndex).join('');
  if (arrIndex > arr.length) arrIndex = 0;
}, 150)




let glowInTexts = document.querySelectorAll(".glowIn");
let setGlowInText = () => {
  glowInTexts.forEach(glowInText => {
    let letters = glowInText.textContent.split("");
    glowInText.textContent = "";
    letters.forEach((letter, i) => {
      let span = document.createElement("span");
      span.textContent = letter;
      span.style.animationDelay = `${i * 0.03}s`;
      glowInText.append(span);
    });
  });
};
setGlowInText();

setTimeout(() => {
  setGlowInText();
}, 8000)

