const startView = document.getElementById("start-view");
const generatorView = document.getElementById("generator-view");
const resultView = document.getElementById("result-view");

const usernameLogin = document.getElementById("username-login");
const startBtn = document.getElementById("start-btn");

const generateBtn = document.getElementById("generate-btn");

const regenerateBtn = document.getElementById("regenerate-btn");
const tryAgainBtn = document.getElementById("tryagain-btn");

/* startView is technically the home page, so we want to default to it */
let activeView = startView;


function changeView(value) {
    activeView.style.display = "none";
    activeView = value;
    activeView.style.display = "flex";
}

startBtn.addEventListener("click", () => {
    // disable form submission (page refresh) 
    event.preventDefault();

    changeView(generatorView);
}); 

generateBtn.addEventListener("click", () => {
    // disable form submission (page refresh) 
    event.preventDefault();

    changeView(resultView);
});

regenerateBtn.addEventListener("click", () => {
    // TODO: regenerate result and update text
});

tryAgainBtn.addEventListener("click", () => {
    changeView(startView);
});
