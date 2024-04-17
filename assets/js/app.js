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

function generateBandName() {
    return "new name";
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
