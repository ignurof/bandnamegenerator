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

const firstWordPrefix = [
    "blue",
    "red",
    "green",
    "purple",
    "orange",
    "white",
    "black",
    "beige",
    "violet",
    "pink",
    "green"
];

const secondWordSuffix = [
    "day",
    "night",
    "rain",
    "sunny"
];

const startView = document.getElementById("start-view");
const generatorView = document.getElementById("generator-view");
const resultView = document.getElementById("result-view");
const contactView = document.getElementById("contact-view");

// startView is technically the home page, so we want to default to it
let activeView = startView;

const usernameLogin = document.getElementById("username-login");
const startBtn = document.getElementById("start-btn");

const generateBtn = document.getElementById("generate-btn");

const regenerateBtn = document.getElementById("regenerate-btn");
const tryAgainBtn = document.getElementById("tryagain-btn");

const contact = document.getElementById("contact");
const contactPageBtn = document.getElementById("contact-page-btn");
const contactName = document.getElementById("contact-name");
const contactEmail = document.getElementById("contact-email");
const contactMsg = document.getElementById("contact-msg");
const contactBtn = document.getElementById("contact-btn");

const resultUsername = document.getElementById("result-username");
const resultBandName = document.getElementById("result-bandname");

const errorUsernameDiv = document.getElementById("username-error");
const errorNameDiv = document.getElementById("name-error");
const errorEmailDiv = document.getElementById("email-error");
const errorMsgDiv = document.getElementById("msg-error");

// https://stackoverflow.com/questions/5999118/how-can-i-add-or-update-a-query-string-parameter
let searchParams = new URLSearchParams(window.location.search);
if(searchParams.get("contact") == "yes"){
    changeView(contactView);
}

function changeView(value) {
    if(activeView == null){
        window.location.assign("index.html?contact=yes");
        return;
    }
    
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

    const firstWord = firstWords[randomFirstInteger];
    const secondWord = secondWords[randomSecondInteger];
    let firstPrefix = "";
    let secondSuffix = "";

    for(let i = 0; i < randomFirstInteger; i++){
        firstPrefix = firstWordPrefix[randomSecondInteger]; 
    }

    if(firstPrefix == undefined){
        firstPrefix = firstWordPrefix[randomInteger(0, firstWordPrefix.length)];
    }

    if(firstPrefix == ""){
        firstPrefix = firstWordPrefix[1];
    }

    do{
        secondSuffix = secondWordSuffix[randomInteger(0, secondWordSuffix.length)];
    }
    while(secondSuffix == "");

    return firstPrefix + firstWord + " " + secondWord + secondSuffix;
}

function setBandName(value) {
    resultBandName.innerText = value;
}

function showError(target, value) {
    return value ? target.style.visibility = "visible" : target.style.visibility = "hidden";
}

function setErrorMsg(target, msg) {
    target.children.item(1).innerText = msg;
    showError(target, true);
}

function hasBadChar(word){
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
    // https://regexr.com/
    // | is OR
    // this very long regex handles all invalid characters that i can see on my keyboard
    const regex = /<|>|\/|\\|\"|\'|,|\.|-|=|\||§|½|!|@|#|£|\$|¤|%|&|\{|\}|\[|\]|\(|\)|\`|\´|\^|\¨|\~|\*|:|;|\+|_|[0-9]/g;
    if(regex.test(word)){
        return true; 
    }

    return false;
}

function validateUsernameInput(event = null, username = null) {
    let validationTarget = null;

    if(event == null){
        validationTarget = username;
    }
    else{
        validationTarget = event.target.value;
    }

    if(hasBadChar(validationTarget)){
        return setErrorMsg(errorUsernameDiv, "invalid characters");
    }

    if(validationTarget.length == 0){
        return setErrorMsg(errorUsernameDiv, "empty username");
    }

    if(validationTarget.length <= 1){
        return setErrorMsg(errorUsernameDiv, "username too short");
    }

    if(validationTarget.length >= 17){
        return setErrorMsg(errorUsernameDiv, "username too long");
    }

    showError(errorUsernameDiv, false);
    return true; 
}

function validateNameInput(event = null, name = null) {
    let validationTarget = null;

    if(event == null){
        validationTarget = name;
    }
    else{
        validationTarget = event.target.value;
    }

    if(hasBadChar(validationTarget)){
        return setErrorMsg(errorNameDiv, "invalid characters");
    }

    if(validationTarget.length == 0){
        return setErrorMsg(errorNameDiv, "empty name");
    }

    if(validationTarget.length <= 1){
        return setErrorMsg(errorNameDiv, "name too short");
    }

    if(validationTarget.length >= 42){
        return setErrorMsg(errorNameDiv, "name too long");
    }

    showError(errorNameDiv, false);
    return true;
}

function validateEmailInput(event = null, email = null) {
    let validationTarget = null;

    if(event == null){
        validationTarget = email;
    }
    else{
        validationTarget = event.target.value;
    }

    if(validationTarget.length <= 5){
        return setErrorMsg(errorEmailDiv, "email too short");
    }

    if(contactEmail.validity.typeMismatch)
        return setErrorMsg(errorEmailDiv, "invalid email");

    showError(errorEmailDiv, false);
    return true;
}

function validateMsgInput(event = null, msg = null) {
    let validationTarget = null;

    if(event == null){
        validationTarget = msg;
    }
    else{
        validationTarget = event.target.value;
    }

    if(validationTarget.length == 0)
        return setErrorMsg(errorMsgDiv, "empty message");

    if(validationTarget.length <= 10)
        return setErrorMsg(errorMsgDiv, "too short message");

    if(validationTarget.length >= 200)
        return setErrorMsg(errorMsgDiv, "cant exceed 200 characters");

    showError(errorMsgDiv, false);
    return true;
}

if(document.getElementById("username") != null)
    document.getElementById("username").addEventListener("input", validateUsernameInput); 

if(startBtn != null){
    startBtn.addEventListener("click", () => {
        // disable form submission (avoids page refresh) 
        event.preventDefault();

        const formData = new FormData(usernameLogin); 
        if(!formData.has("username")) 
            return setErrorMsg(errorUsernameDiv, "username form data not found"); 

        if(validateUsernameInput(null, formData.get("username"))){
            resultUsername.innerText = formData.get("username");    
            changeView(generatorView);
        }
    }); 
}

if(generateBtn != null){
    generateBtn.addEventListener("click", () => {
        // disable form submission (avoids page refresh) 
        event.preventDefault();

        changeView(resultView);

        setBandName(generateBandName());
    });
}

if(regenerateBtn != null){
    regenerateBtn.addEventListener("click", () => {
        setBandName(generateBandName());
    });
}

if(tryAgainBtn != null){
    tryAgainBtn.addEventListener("click", () => {
        changeView(startView);
    });
}

if(contactPageBtn != null){
    contactPageBtn.addEventListener("click", () => {
        changeView(contactView);
    });
}

if(contactName != null)
    contactName.addEventListener("input", validateNameInput);

if(contactEmail != null)
    contactEmail.addEventListener("input", validateEmailInput);

if(contactMsg != null)
    contactMsg.addEventListener("input", validateMsgInput);

if(contactBtn != null){
    contactBtn.addEventListener("click", () => {
        // disable form submission (avoids page refresh) 
        event.preventDefault();

        const formData = new FormData(contact);
        if(!formData.has("contact-name"))
            return setErrorMsg(errorNameDiv, "name form data not found");

        if(!formData.has("contact-email"))
            return setErrorMsg(errorEmailDiv, "mail form data not found");

        if(!formData.has("contact-msg"))
            return setErrorMsg(errorMsgDiv, "msg form data not found");

        let canSend = false;

        if(validateNameInput(null, formData.get("contact-name"))) canSend = true;

        if(validateEmailInput(null, formData.get("contact-email"))) canSend = true;

        if(validateMsgInput(null, formData.get("contact-msg"))) canSend = true;

        if(canSend)
            window.location.assign("thanks.html");
    });
}
