const firstWords = [
    "zero", 
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
];

const secondWords = [
    "abra",
    "kadabra",
    "yayaya",
    "plugs",
    "certified",
    "sand",
    "brand",
    "rubberbands",
    "candy",
    "snakes",
    "grass",
    "glass",
    "door",
    "click"
];

const startView = document.getElementById("start-view");
const generatorView = document.getElementById("generator-view");
const resultView = document.getElementById("result-view");

/* startView is technically the home page, so we want to default to it */
let activeView = startView;

const usernameLogin = document.getElementById("username-login");
const startBtn = document.getElementById("start-btn");

const generateBtn = document.getElementById("generate-btn");

const regenerateBtn = document.getElementById("regenerate-btn");
const tryAgainBtn = document.getElementById("tryagain-btn");

const resultUsername = document.getElementById("result-username");
const resultBandName = document.getElementById("result-bandname");


function changeView(value) {
    activeView.style.display = "none";
    activeView = value;
    activeView.style.display = "flex";
}

/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
function randomInteger(min, max) {
    /* Math.random gives us a random floating-point number between 0(inclusive) and 1(exclusive)
     * To get a larger range just multiply the range put together and add the inclusive var
     * Floor it down to the nearest whole number so we get an integer */
    return Math.floor(Math.random() * (max - min) + min);
}

function generateBandName() {
    const randomFirstInteger = randomInteger(0, firstWords.length);
    const randomSecondInteger = randomInteger(0, secondWords.length);

    const firstWord = firstWords[Math.floor(randomFirstInteger / 2 * 3.6)]; 
    const secondWord = secondWords[Math.floor(randomSecondInteger / 3 * 1.4)];

    return firstWord + " " + secondWord;
}

function setBandName(value) {
    resultBandName.innerText = value;
}

startBtn.addEventListener("click", () => {
    // disable form submission (avoids page refresh) 
    event.preventDefault();

    changeView(generatorView);
}); 

generateBtn.addEventListener("click", () => {
    // disable form submission (avoids page refresh) 
    event.preventDefault();

    changeView(resultView);

    setBandName(generateBandName());
});

regenerateBtn.addEventListener("click", () => {
    setBandName(generateBandName());
});

tryAgainBtn.addEventListener("click", () => {
    changeView(startView);
});
