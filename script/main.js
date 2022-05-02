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

const startGameButton = document.getElementById("startGameButton");
const showingCardsSection = document.getElementById("showingCardsSection");

const showElement = (element, elemDisplay) => {
    element.style.display = elemDisplay;
    setTimeout (() => {
        element.style.opacity = 1;
        element.style.zIndex = 2;    
    }, 500)
}
const hideElement = (element) => {
    element.style.opacity = 0;
    element.style.zIndex = -1;
    setTimeout (() => {
        element.display = "none";
    }, 800)
}
const changeSection = (oldSection, oldSecDisplay, newSection, newSecDisplay) => {
    hideElement(oldSection, oldSecDisplay);
    showElement(newSection, newSecDisplay);
}

 rulesButton.addEventListener("click", () => {changeSection(nav, "grid", rulesSection, "block")});
 rulesCloseButton.addEventListener("click", () => {changeSection(rulesSection, "block", nav, "grid")});

 settingsButton.addEventListener("click", () => {changeSection(nav, "grid", settingsSection, "block")});
 settingsCloseButton.addEventListener("click", () => {changeSection(settingsSection, "block", nav, "grid")});

matchParamButton.addEventListener("click", () => {
    changeSection(mainSection, "flex", matchParamSection, "flex");
    hideElement(burgerMenu, "inline")
});
matchParamCloseButton.addEventListener("click", () => {
    changeSection(matchParamSection, "flex", mainSection, "flex");
    showElement(burgerMenu, "inline")
});
startGameButton.addEventListener("click", () => {changeSection(matchParamSection,"flex" , showingCardsSection, "flex")});


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

const playersParam = new Parameter({
    textId: "playersCounterText",
    textInSingular: "PLAYER",
    textInPlural: "PLAYERS",
    counterId: "playersCounter",
    minusButtonId: "playersMinusButton",
    plusButtonId: "playersPlusButton",
    minValue: 3,
    maxValue: 10
});
const spiesParam = new Parameter({
    textId: "spiesCounterText",
    textInSingular: "SPY",
    textInPlural: "SPIES",
    counterId: "spiesCounter",
    minusButtonId: "spiesMinusButton",
    plusButtonId: "spiesPlusButton",
    minValue: 1,
    maxValue: 3
});
const timeParam = new Parameter({
    textId: "timeCounterText",
    textInSingular: "MINUTE",
    textInPlural: "MINUTES",
    counterId: "timeCounter",
    minusButtonId: "timeMinusButton",
    plusButtonId: "timePlusButton",
    minValue: 5,
    maxValue: 15
});


document.getElementById("playersMinusButton").addEventListener("click", () => {playersParam.decreaseCounter()});
document.getElementById("playersPlusButton").addEventListener("click", () => {playersParam.increaseCounter()});

document.getElementById("spiesMinusButton").addEventListener("click", () => {spiesParam.decreaseCounter()});
document.getElementById("spiesPlusButton").addEventListener("click", () => {spiesParam.increaseCounter()});

document.getElementById("timeMinusButton").addEventListener("click", () => {timeParam.decreaseCounter()});
document.getElementById("timePlusButton").addEventListener("click", () => {timeParam.increaseCounter()});

//PARAMETERS COUNTER (MAKING CARDS)
class Player {
    constructor ({
        playerNumbText,
        cardBackSubjectUrl,
        subjectNameText,
    })
    {
        this.playerNumbText = playerNumbText;
        this.cardBackSubjectUrl = cardBackSubjectUrl;
        this.subjectNameText = subjectNameText;
    }
}


class Location {
    constructor ({
        id,
        locationName,
        cardBackLocationUrl,
    })
    {   
        this.id = id;
        this.locationName = locationName;
        this.cardBackLocationUrl = cardBackLocationUrl;
    }
}

const loc0 = new Location ({
    id: 0,
    locationName: "CIRCUS",
    cardBackLocationUrl: "../assets/images/circus.png",
})
const loc1 = new Location ({
    id: 1,
    locationName: "SPACE STATION",
    cardBackLocationUrl: "../assets/images/space-station.png",
})


const allLocationsList = [loc0, loc1];



const cardsValuesFullList = [];
const cardsValuesRandomMaker = () => {
    const pickRandomLocationId = () => Math.floor(Math.random()*(allLocationsList.length));
    const locationIndex = pickRandomLocationId();

    let amountOfPlayers = parseInt(document.getElementById(playersParam.counterId).innerHTML);
    let amountOfSpies = parseInt(document.getElementById(spiesParam.counterId).innerHTML);
    let totalAmountOfPlayers = amountOfPlayers + amountOfSpies;
    

    for (let i = 1; i <= totalAmountOfPlayers; i++) {
        const pickSpy = () => {
            cardsValuesFullList.push (new Player ({
                playerNumbText: `PLAYER ${i}`,
                cardBackSubjectUrl: "../assets/images/spy.svg",
                subjectNameText: "YOU ARE SPY!"
            }));
            amountOfSpies--;
        }
        const pickPlayer = () => {
            cardsValuesFullList.push(new Player ({
                playerNumbText: `PLAYER ${i}`,
                cardBackSubjectUrl: allLocationsList[locationIndex].cardBackLocationUrl,
                subjectNameText: allLocationsList[locationIndex].locationName,
            })); 
            amountOfPlayers--;
        }

        const getRandomBoolean = () => Math.floor(Math.random()*2);
        const randomBoolean = getRandomBoolean();

        switch (true) {
            case (randomBoolean === 0 && amountOfSpies !== 0):
                pickSpy();
                break

            case (randomBoolean === 0 && amountOfSpies === 0):
                pickPlayer();
                break

            case (randomBoolean !== 0 && amountOfPlayers !== 0):
                pickPlayer();
                break

            case (randomBoolean !== 0 && amountOfPlayers === 0):
                pickSpy();
                break

            default:
                console.log("DEFAULT!!!");
        }
        console.log("ITER " + i)
        console.log("spies " +amountOfSpies);
        console.log("players " + amountOfPlayers);
        console.log("")
    }
}

startGameButton.addEventListener("click", () => {cardsValuesRandomMaker(), loadNewCard(0)});

//SHOWING CARDS
const playerNumb = document.getElementById("playerNumb");
const card = document.getElementById("card");
const cardBackSubject = document.getElementById("cardBackSubject");
const subjectName = document.getElementById("subjectName");
const nextCardButton = document.getElementById("nextCardButton");

const loadNewCard = (cardIndex) => {
    playerNumb.innerHTML = cardsValuesFullList[cardIndex].playerNumbText;
    cardBackSubject.style.backgroundImage = `url(${cardsValuesFullList[cardIndex].cardBackSubjectUrl})`;
    subjectName.innerHTML = cardsValuesFullList[cardIndex].subjectNameText;
};

const revealCard = () => {
    card.style.transform = "rotateY(180deg)";
    setTimeout(() => {
        showElement(cardBackSubject, "block");   
    },800);
    setTimeout(() => {
        showElement(subjectName, "block");
        showElement(nextCardButton, "block"); 
    },2000)
}

const turnBackCard = () => {
    card.style.transform = "rotateY(0deg)";
        hideElement(subjectName, "block");
        hideElement(nextCardButton, "block");
}

const changeToNewCard = (cardIndex) => {
    turnBackCard;
    setTimeout(() => {
        loadNewCard(cardIndex);
    }, 400)
}
card.addEventListener("click",revealCard);
nextCardButton.addEventListener("click", () => {
    turnBackCard();
    changeToNewCard(1);
    console.log(cardsValuesFullList[1].playerNumbText)
})
