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

// startView is technically the home page, so we want to default to it
let activeView = startView;

const usernameLogin = document.getElementById("username-login");
const startBtn = document.getElementById("start-btn");

const generateBtn = document.getElementById("generate-btn");

const regenerateBtn = document.getElementById("regenerate-btn");
const tryAgainBtn = document.getElementById("tryagain-btn");

const resultUsername = document.getElementById("result-username");
const resultBandName = document.getElementById("result-bandname");

const errorDiv = document.getElementById("error");
const errorMsg = document.getElementById("error-msg");

function changeView(value) {
    activeView.style.display = "none";
    activeView = value;
    activeView.style.display = "flex";
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
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

function showError(value) {
    value ? errorDiv.style.visibility = "visible" : errorDiv.style.visibility = "hidden";
}

function setErrorMsg(msg) {
    errorMsg.innerText = msg;
    showError(true);
}

function validateInput(event = null, username = null) {
    let validationTarget = null;

    if(event == null){
        validationTarget = username;
    }
    else{
        validationTarget = event.target.value;
    }

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
    // https://regexr.com/
    // | is OR
    // this very long regex handles all invalid characters that i can see on my keyboard
    const regex = /<|>|\/|\\|\"|\'|,|\.|-|=|\||§|½|!|@|#|£|\$|¤|%|&|\{|\}|\[|\]|\(|\)|\`|\´|\^|\¨|\~|\*|:|;|\+|_|[0-9]/g;
    if(regex.test(validationTarget)){
        return setErrorMsg("invalid characters in username"); 
    }

    if(validationTarget.length == 0){
        return setErrorMsg("empty username");
    }

    if(validationTarget.length <= 1){
        return setErrorMsg("username too short");
    }

    if(validationTarget.length >= 17){
        return setErrorMsg("username too long");
    }

    showError(false);
    return true; 
}

document.getElementById("username").addEventListener("input", validateInput); 

startBtn.addEventListener("click", () => {
    // disable form submission (avoids page refresh) 
    event.preventDefault();

    let formData = new FormData(usernameLogin); 
    if(!formData.has("username")) return console.error("username form input not found");

    if(validateInput(null, formData.get("username"))){
        resultUsername.innerText = formData.get("username");    
        changeView(generatorView);
    }
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
