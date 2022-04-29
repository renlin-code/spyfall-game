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


//RULES-POPUP AND SETTINGS-POPUP ANIMATION
const rulesButton = document.getElementById("rulesButton");
const rulesPopup = document.querySelector(".rules-popup");
const rulesCloseButton = document.getElementById("rulesCloseButton");

const settingsButton = document.getElementById("settingsButton");
const settingsPopup = document.querySelector(".settings-popup");
const settingsCloseButton = document.getElementById("settingsCloseButton");

const showPopup = (popUp) => {
    popUp.style.opacity = 1;
    popUp.style.zIndex = 3;
}
const hidePopup = (popUp) => {
    popUp.style.opacity = 0;
    popUp.style.zIndex = -1;
}

 rulesButton.addEventListener("click", () => {showPopup(rulesPopup)});
 rulesCloseButton.addEventListener("click", () => {hidePopup(rulesPopup)});

 settingsButton.addEventListener("click", () => {showPopup(settingsPopup)});
 settingsCloseButton.addEventListener("click", () => {hidePopup(settingsPopup)});