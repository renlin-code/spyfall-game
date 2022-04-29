"use strict";

// MENU ANIMATION
const mainSection = document.getElementById("mainSection");
const burgerMenu = document.getElementById("burgerMenu");
const nav = document.querySelector("nav");
const homeButton = document.getElementById("homeButton");

const showMenu = () => {
    nav.style.transform = "translateY(100vh)";
    burgerMenu.style.opacity = 0;
    mainSection.style.opacity = 0;
}
const hideMenu = () => {
    nav.style.transform = "none";
    burgerMenu.style.opacity = 1;
    mainSection.style.opacity = 1;
}

burgerMenu.addEventListener("click", showMenu);
homeButton.addEventListener("click", hideMenu);    


//SECTIONS ANIMATION
const rulesButton = document.getElementById("rulesButton");
const rulesSection = document.querySelector(".rules-section");
const rulesCloseButton = document.getElementById("rulesCloseButton");

const settingsButton = document.getElementById("settingsButton");
const settingsSection = document.querySelector(".settings-section");
const settingsCloseButton = document.getElementById("settingsCloseButton");

const matchParamButton = document.getElementById("matchParamButton");
const matchParamSection = document.getElementById("matchParamSection");
const matchParamCloseButton = document.getElementById("matchParamCloseButton");

const showSection = (section) => {
    section.style.opacity = 1;
    section.style.zIndex = 3;
}
const hideSection = (section) => {
    section.style.opacity = 0;
    section.style.zIndex = -1;
}
const changeSection = (oldSection, newSection) => {
    hideSection(oldSection);
    showSection(newSection);
}

 rulesButton.addEventListener("click", () => {changeSection(nav, rulesSection)});
 rulesCloseButton.addEventListener("click", () => {changeSection(rulesSection, nav)});

 settingsButton.addEventListener("click", () => {changeSection(nav, settingsSection)});
 settingsCloseButton.addEventListener("click", () => {changeSection(settingsSection, nav)});

matchParamButton.addEventListener("click", () => {
    changeSection(mainSection, matchParamSection);
    hideSection(burgerMenu)
});
matchParamCloseButton.addEventListener("click", () => {
    changeSection(matchParamSection, mainSection);
    showSection(burgerMenu)
});