"use strict";

//DOM ELEMENTS
const mainSection = document.getElementById("mainSection");
const burgerMenu = document.getElementById("burgerMenu");
const nav = document.querySelector("nav");
const homeButton = document.getElementById("homeButton");

const rulesButton = document.getElementById("rulesButton");
const rulesSection = document.querySelector(".rules-section");
const rulesCloseButton = document.getElementById("rulesCloseButton");

const settingsButton = document.getElementById("settingsButton");
const settingsSection = document.querySelector(".settings-section");
const settingsCloseButton = document.getElementById("settingsCloseButton");
const enLangButton = document.getElementById("enLangButton");
const esLangButton = document.getElementById("esLangButton");
const ruLangButton = document.getElementById("ruLangButton");
const greenThemeButton = document.getElementById("greenThemeButton");
const pinkThemeButton = document.getElementById("pinkThemeButton");
const blueThemeButton = document.getElementById("blueThemeButton");

const matchParamButton = document.getElementById("matchParamButton");
const matchParamSection = document.getElementById("matchParamSection");
const matchParamCloseButton = document.getElementById("matchParamCloseButton");

const locationsButton = document.getElementById("locationsButton");
const locationsSection = document.getElementById("locationsSection");
const locationsCloseButton = document.getElementById("locationsCloseButton");

const popUp = document.getElementById("popUp");
const popUpYesButton = document.getElementById("popUpYesButton");
const popUpNoButton = document.getElementById("popUpNoButton");

const startGameButton = document.getElementById("startGameButton");
const showingCardsSection = document.getElementById("showingCardsSection");

const playerNumb = document.getElementById("playerNumb");
const card = document.getElementById("card");
const cardBackSubject = document.getElementById("cardBackSubject");
const subjectName = document.getElementById("subjectName");
const nextCardButton = document.getElementById("nextCardButton");

const countDownContainer = document.getElementById("countDownContainer");
const countDown = document.getElementById("countDown");
const countDownButtonStartPause = document.getElementById("countDownButtonStartPause");
const countDownButtonStop = document.getElementById("countDownButtonStop");


//NAVIGATION ANIMATIONS FUNCTIONS
const showElement = (element, elemDisplay) => {
    element.style.display = elemDisplay;
    setTimeout (() => {
        element.style.opacity = 1;
        element.style.zIndex = 2;    
    }, 50)
}
const hideElement = (element) => {
    element.style.opacity = 0;
    element.style.zIndex = -1;
    setTimeout (() => {
        element.style.display = "none";
    }, 400)
}
const changeSection = (oldSection, newSection, newSecDisplay) => {
    hideElement(oldSection);
    showElement(newSection, newSecDisplay);
}

const showMenu = () => {
    hideElement(burgerMenu);
    hideElement(mainSection);

    nav.style.display = "grid";
    setTimeout(() => {
        nav.style.transform = "translateY(100vh)";
    }, 50)
}
const hideMenu = () => {
    showElement(burgerMenu, "inline");
    showElement(mainSection, "flex");

    nav.style.transform = "none";
    setTimeout(() => {
        nav.style.display = "none";
    }, 400)
}

const showPopUp = () => {
    popUp.style.display = "grid";
    setTimeout(() => {
        popUp.style.transform = "scale(1)";
    }, 50)
}
const hidePopUp = () => {
    popUp.style.transform = "scale(0)";
    setTimeout(() => {
        popUp.style.display = "none";
    }, 400)
}



//NAVIGATION ANIMATIONS

burgerMenu.addEventListener("click", showMenu);
homeButton.addEventListener("click", hideMenu);    

 rulesButton.addEventListener("click", () => {changeSection(nav, rulesSection, "block")});
 rulesCloseButton.addEventListener("click", () => {changeSection(rulesSection, nav, "grid")});

 settingsButton.addEventListener("click", () => {changeSection(nav, settingsSection, "block")});
 settingsCloseButton.addEventListener("click", () => {changeSection(settingsSection, nav, "grid")});

matchParamButton.addEventListener("click", () => {
    changeSection(mainSection, matchParamSection, "flex");
    hideElement(burgerMenu, "inline")
});
matchParamCloseButton.addEventListener("click", () => {
    changeSection(matchParamSection, mainSection, "flex");
    showElement(burgerMenu, "inline")
});

locationsButton.addEventListener("click", () => {
    changeSection(matchParamSection, locationsSection, "flex");
    showElement(locationsCloseButton, "inline");
});
locationsCloseButton.addEventListener("click", () => {
    changeSection(locationsSection, matchParamSection, "flex");
});


startGameButton.addEventListener("click", () => {
    changeSection(matchParamSection, showingCardsSection, "flex");
    showElement(countDownContainer, "flex");
    hideElement(locationsCloseButton);
});

//LANGUAGES AND THEMES
let root = document.querySelector(":root");
let logo = document.querySelector(".logo");
let menuContainer = document.querySelector(".menu-items-container");
let hero = document.querySelector(".hero");

const changeToGreenTheme = () => {
    root.style.setProperty("--main-color", "#C6FF00");
    root.style.setProperty("--secondary-color", "#EEFFB2");
    logo.style.backgroundImage = "url(../assets/logos/logo-green.svg)";
    menuContainer.style.backgroundImage = "url(../assets/images/menu-eyes-image-green.svg)";
    hero.style.backgroundImage = "url(../assets/images/hero-image-green.svg)";
    console.log("Green Theme");
}

const changeToPinkTheme = () => {
    root.style.setProperty("--main-color", "#FA00FF");
    root.style.setProperty("--secondary-color", "#EAD1EC");
    logo.style.backgroundImage = "url(../assets/logos/logo-pink.svg)";
    menuContainer.style.backgroundImage = "url(../assets/images/menu-eyes-image-pink.svg)";
    hero.style.backgroundImage = "url(../assets/images/hero-image-pink.svg)";
    console.log("Pink Theme");
}

const changeToBlueTheme = () => {
    root.style.setProperty("--main-color", "#2D53DA");
    root.style.setProperty("--secondary-color", "#E6E5F3");
    logo.style.backgroundImage = "url(../assets/logos/logo-blue.svg)";
    menuContainer.style.backgroundImage = "url(../assets/images/menu-eyes-image-blue.svg)";
    hero.style.backgroundImage = "url(../assets/images/hero-image-blue.svg)";
    console.log("Blue Theme");
}

const changeTheme = () => {
    switch(true) {
        case (greenThemeButton.checked == true):
            changeToGreenTheme();
            break
        case (pinkThemeButton.checked == true):
            changeToPinkTheme();
            break
        case (blueThemeButton.checked == true):
            changeToBlueTheme();
            break
        default:
            console.log("DEFAULT!!!");
    }    
}
greenThemeButton.addEventListener("click", changeTheme);
pinkThemeButton.addEventListener("click", changeTheme);
blueThemeButton.addEventListener("click", changeTheme);


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


//PARAMETERS COUNTER (MAKING LOCATIONS CARDS)
class Location {
    constructor ({
        id,
        locationName,
        cardLocationUrl,
    })
    {   
        this.id = id;
        this.locationName = locationName;
        this.cardLocationUrl = cardLocationUrl;
    }
}

const loc0 = new Location ({
    id: 0,
    locationName: "CIRCUS",
    cardLocationUrl: "../assets/images/circus.png"
})
const loc1 = new Location ({
    id: 1,
    locationName: "SPACE STATION",
    cardLocationUrl: "../assets/images/space-station.png",
})
const loc2 = new Location ({
    id: 2,
    locationName: "NORTH POLE",
    cardLocationUrl: "../assets/images/north-pole.png",
})
const loc3 = new Location ({
    id: 3,
    locationName: "POLICE STATION",
    cardLocationUrl: "../assets/images/police-station.png",
})
const loc4 = new Location ({
    id: 4,
    locationName: "MOUNTAIN PEAK",
    cardLocationUrl: "../assets/images/mountain-peak.png",
})
const loc5 = new Location ({
    id: 5,
    locationName: "DESERT ISLAND",
    cardLocationUrl: "../assets/images/desert-island.png",
})
const loc6 = new Location ({
    id: 6,
    locationName: "CONFERENCE",
    cardLocationUrl: "../assets/images/conference.png",
})
const loc7 = new Location ({
    id: 7,
    locationName: "SPA SALON",
    cardLocationUrl: "../assets/images/spa-salon.png",
})
const loc8 = new Location ({
    id: 8,
    locationName: "SWIMMING POOL",
    cardLocationUrl: "../assets/images/swimming-pool.png",
})
const loc9 = new Location ({
    id: 9,
    locationName: "SUBMARINE",
    cardLocationUrl: "../assets/images/submarine.png",
})
const loc10 = new Location ({
    id: 10,
    locationName: "CASINO",
    cardLocationUrl: "../assets/images/casino.png",
})
const loc11 = new Location ({
    id: 11,
    locationName: "AIRCRAFT",
    cardLocationUrl: "../assets/images/aircraft.png",
})
const loc12 = new Location ({
    id: 12,
    locationName: "SCHOOL",
    cardLocationUrl: "../assets/images/school.png",
})
const loc13 = new Location ({
    id: 13,
    locationName: "PIRATE SHIP",
    cardLocationUrl: "../assets/images/pirate-ship.png",
})
const loc14 = new Location ({
    id: 14,
    locationName: "GRAVEYARD",
    cardLocationUrl: "../assets/images/graveyard.png",
})
const loc15 = new Location ({
    id: 15,
    locationName: "CAMPING",
    cardLocationUrl: "../assets/images/camping.png",
})

const allLocationsObjectsList = [loc0, loc1, loc2, loc3, loc4, loc5, loc6, loc7, loc8, loc9, loc10, loc11, loc12, loc13, loc14, loc15];

const allLocationCardsList = document.querySelectorAll(".location-card");
for(let i = 0; i < allLocationCardsList.length; i++){
    allLocationCardsList[i].children[0].style.backgroundImage = `url(${allLocationsObjectsList[i].cardLocationUrl})`;
    allLocationCardsList[i].children[1].innerText = allLocationsObjectsList[i].locationName;
}

//PARAMETERS COUNTER (MAKING PLAYERS CARDS)
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

let valuesForPlayersList = [];
let playerCardForRevealIndex = 0;
let matchTimeInSeconds = 0;

const setMatchParams = () => {
    const pickRandomLocationId = () => Math.floor(Math.random()*(allLocationsObjectsList.length));
    const locationIndex = pickRandomLocationId();
    
    let amountOfPlayers = parseInt(document.getElementById(playersParam.counterId).innerHTML);
    let amountOfSpies = parseInt(document.getElementById(spiesParam.counterId).innerHTML);
    let totalAmountOfPlayers = amountOfPlayers + amountOfSpies;
    

    for (let i = 1; i <= totalAmountOfPlayers; i++) {
        const pickSpy = () => {
            valuesForPlayersList.push (new Player ({
                playerNumbText: `PLAYER ${i}`,
                cardBackSubjectUrl: "../assets/images/spy.png",
                subjectNameText: "YOU ARE SPY!"
            }));
            amountOfSpies--;
        }
        const pickPlayer = () => {
            valuesForPlayersList.push(new Player ({
                playerNumbText: `PLAYER ${i}`,
                cardBackSubjectUrl: allLocationsObjectsList[locationIndex].cardLocationUrl,
                subjectNameText: allLocationsObjectsList[locationIndex].locationName,
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
        console.log("----------------------")
    }
    matchTimeInSeconds = parseInt(document.getElementById(timeParam.counterId).innerHTML) * 60;
}

//SHOWING PLAYERS CARDS
startGameButton.addEventListener("click", () => {setMatchParams(), showCardsInARow()});

const loadNewCard = (cardIndex) => {
    playerNumb.innerHTML = valuesForPlayersList[cardIndex].playerNumbText;
    cardBackSubject.style.backgroundImage = `url(${valuesForPlayersList[cardIndex].cardBackSubjectUrl})`;
    subjectName.innerHTML = valuesForPlayersList[cardIndex].subjectNameText;
};

const revealCard = () => {
    card.style.transform = "rotateY(180deg)";
    setTimeout(() => {
        showElement(cardBackSubject, "block");   
    },800);
    setTimeout(() => {
        showElement(subjectName, "block");
        showElement(nextCardButton, "block"); 
    },1000)
}

const changeToNewCard = (cardIndex) => {
    card.style.transform = "rotateY(0deg)";
    hideElement(subjectName, "block");
    hideElement(nextCardButton, "block");
    hideElement(cardBackSubject, "block");   

    setTimeout(() => {
        loadNewCard(cardIndex);
    }, 800)
}

const showCardsInARow = () => {

    if (playerCardForRevealIndex < valuesForPlayersList.length) {
        changeToNewCard(playerCardForRevealIndex);
        playerCardForRevealIndex++;
        console.log(playerCardForRevealIndex);
    }
    else {
        changeSection(showingCardsSection, locationsSection, "flex");
        showElement(countDownContainer, "flex");
        startCountDown();
    }    
}

card.addEventListener("click",revealCard);
nextCardButton.addEventListener("click", showCardsInARow);


//COUNTDOWN
let keepGoing = false;

const countDownFunction = () => {
    setInterval(() => {
        if (keepGoing == true) {
            let minutes = Math.floor(matchTimeInSeconds / 60);
            let seconds = matchTimeInSeconds % 60;
        
            seconds = seconds < 10 ? "0" + seconds : seconds;
            minutes = minutes < 10 ? "0" + minutes : minutes;
        
            countDown.innerHTML = `${minutes}:${seconds}`;
            if (matchTimeInSeconds > 0) {
                matchTimeInSeconds--;
                console.log(matchTimeInSeconds);
            } else {
                keepGoing = false;
                console.log("TIME IS OVER");
                resetMatch();
            }    
        }
    }, 1000)
}

const startCountDown = () => {
     keepGoing = true;
     countDownButtonStartPause.innerHTML = "PAUSE"; 
}

const pauseCountDown = () => {
    keepGoing = false;
    countDownButtonStartPause.innerHTML = "START";
}

const startOrPauseCountDown = () => {
    if (keepGoing == true && countDownButtonStartPause.innerHTML == "PAUSE") {
        pauseCountDown();
    } else {
        startCountDown();
    }
}

const resetMatch = () => {
    valuesForPlayersList = [];
    playerCardForRevealIndex = 0;
    matchTimeInSeconds = 0;
    playerNumb.innerHTML = "PLAYER 1"
    changeSection(locationsSection, mainSection, "flex");
    showElement(burgerMenu, "inline")
}

countDownFunction();

countDownButtonStartPause.addEventListener("click", startOrPauseCountDown);
countDownButtonStop.addEventListener("click", () => {
    pauseCountDown();
    showPopUp();
})
popUpNoButton.addEventListener("click", () => {
    startCountDown();
    hidePopUp();
})
popUpYesButton.addEventListener("click", () => {
    hidePopUp();
    resetMatch();
    hideElement(countDownContainer);
})