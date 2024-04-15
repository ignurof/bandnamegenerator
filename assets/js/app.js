const startView = document.getElementById("start-view");
const generatorView = document.getElementById("generator-view");
const resultView = document.getElementById("result-view");

const usernameLogin = document.getElementById("username-login");
const startBtn = document.getElementById("start-btn");

const generateBtn = document.getElementById("generate-btn");

const regenerateBtn = document.getElementById("regenerate-btn");
const tryAgainBtn = document.getElementById("tryagain-btn");

startBtn.addEventListener("click", async () => {
    // TODO: get form data

    setActiveView(generateView);
});

generateBtn.addEventListener("click", async () => {
    // TODO: get form data

    setActiveView(resultView);
});

regenerateBtn.addEventListener("click", async () => {
    // TODO: change only band name and display new result
});

tryAgainBtn.addEventListener("click", async () => {
    setActiveView(startView);
});

function setActiveView(value) {
    activeView.style.display = "none";
    activeView = value;
    activeView.style.display = "flex";
}

