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


//SECTIONS NAVIGATION ANIMATION
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


//PARAMETERS COUNTERS
class Parameter {
    constructor({
        textId,
        textInSingular,
        textInPlural,
        counterId,
        minValue,
        maxValue,
        minusButtonId,
        plusButtonId, 
    })
    {   
        this.textId = textId;
        this.textInSingular = textInSingular;
        this.textInPlural = textInPlural;
        this.counterId = counterId;
        this.minValue = minValue;
        this.maxValue = maxValue;
        this.minusButtonId = minusButtonId;
        this.plusButtonId = plusButtonId;
    }
    decreaseCounter () {
        let counter = document.getElementById(this.counterId)
        let counterParsed = parseInt(counter.innerHTML);
        let text = document.getElementById(this.textId);

        if (counterParsed <= 2) {
            text.innerHTML = this.textInSingular;
        } else {
            text.innerHTML = this.textInPlural;
        }
        if (counterParsed > this.minValue + 1) {
            const minusButton = document.getElementById(this.minusButtonId);
            minusButton.style.opacity = 1
        } else {
            const minusButton = document.getElementById(this.minusButtonId);
            minusButton.style.opacity = 0.5 
        }

        if (counterParsed < this.maxValue + 1) {
            const plusButton = document.getElementById(this.plusButtonId);
            plusButton.style.opacity = 1
        } else {
            const plusButton = document.getElementById(this.plusButtonId);
            plusButton.style.opacity = 0.5
        }

        if (counterParsed != this.minValue) {
            counterParsed--;
        }
        counter.innerHTML = counterParsed;
    }
    increaseCounter () {
        let counter = document.getElementById(this.counterId)
        let counterParsed = parseInt(counter.innerHTML);
        let text = document.getElementById(this.textId);

        if (counterParsed >= 1) {
            text.innerHTML = this.textInPlural;
        } else {
            text.innerHTML = this.textInSingular;
        }
        if (counterParsed > this.minValue - 1) {
            const minusButton = document.getElementById(this.minusButtonId);
            minusButton.style.opacity = 1
        } else {
            const minusButton = document.getElementById(this.minusButtonId);
            minusButton.style.opacity = 0.5 
        }
        if (counterParsed < this.maxValue - 1) {
            const plusButton = document.getElementById(this.plusButtonId);
            plusButton.style.opacity = 1
        } else {
            const plusButton = document.getElementById(this.plusButtonId);
            plusButton.style.opacity = 0.5
        }
        if (counterParsed != this.maxValue) {
            counterParsed++;
        }
        counter.innerHTML = counterParsed;
    }
};

const amountOfPlayers = new Parameter({
    textId: "playersCounterText",
    textInSingular: "PLAYER",
    textInPlural: "PLAYERS",
    counterId: "playersCounter",
    minusButtonId: "playersMinusButton",
    plusButtonId: "playersPlusButton",
    minValue: 3,
    maxValue: 10
});
const amountOfSpies = new Parameter({
    textId: "spiesCounterText",
    textInSingular: "SPY",
    textInPlural: "SPIES",
    counterId: "spiesCounter",
    minusButtonId: "spiesMinusButton",
    plusButtonId: "spiesPlusButton",
    minValue: 1,
    maxValue: 3
});
const amountOfTime = new Parameter({
    textId: "timeCounterText",
    textInSingular: "MINUTE",
    textInPlural: "MINUTES",
    counterId: "timeCounter",
    minusButtonId: "timeMinusButton",
    plusButtonId: "timePlusButton",
    minValue: 5,
    maxValue: 15
});


document.getElementById("playersMinusButton").addEventListener("click", () => {amountOfPlayers.decreaseCounter()});
document.getElementById("playersPlusButton").addEventListener("click", () => {amountOfPlayers.increaseCounter()});

document.getElementById("spiesMinusButton").addEventListener("click", () => {amountOfSpies.decreaseCounter()});
document.getElementById("spiesPlusButton").addEventListener("click", () => {amountOfSpies.increaseCounter()});

document.getElementById("timeMinusButton").addEventListener("click", () => {amountOfTime.decreaseCounter()});
document.getElementById("timePlusButton").addEventListener("click", () => {amountOfTime.increaseCounter()});
