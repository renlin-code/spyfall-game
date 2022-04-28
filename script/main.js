"use strict"

// MENU ANIMATION
const burgerMenu = document.getElementById("burgerMenu");
const nav = document.querySelector("nav");
const homeButton = document.getElementById("homeButton");

const showMenu = () => {
    nav.style.transform = "translateY(100vh)";
    burgerMenu.style.opacity = 0;
}
const hideMenu = () => {
    nav.style.transform = "none";
    burgerMenu.style.opacity = 1;
}

burgerMenu.addEventListener("click", showMenu);
homeButton.addEventListener("click", hideMenu);    


//RULES-POPUP ANIMATION
const rulesButton = document.getElementById("rulesButton");
const rulesPopup = document.querySelector(".rules-popup");
const rulesCloseButton = document.getElementById("rulesCloseButton");
 
const showRules = () => {
    rulesPopup.style.opacity = 1;
    rulesPopup.style.zIndex = 3;
 }
 const hideRules = () => {
    rulesPopup.style.opacity = 0;
    rulesPopup.style.zIndex = -1;
 }

 rulesButton.addEventListener("click", showRules);
 rulesCloseButton.addEventListener("click", hideRules);

//SETTINGS-POPUP ANIMATION
const settingsButton = document.getElementById("settingsButton");
const settingsPopup = document.querySelector(".settings-popup");
const settingsCloseButton = document.getElementById("settingsCloseButton");
 
const showSettings = () => {
    settingsPopup.style.opacity = 1;
    settingsPopup.style.zIndex = 3;
 }
 const hideSettings = () => {
    settingsPopup.style.opacity = 0;
    settingsPopup.style.zIndex = -1;
 }

 settingsButton.addEventListener("click", showSettings);
 settingsCloseButton.addEventListener("click", hideSettings);