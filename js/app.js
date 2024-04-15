const actionBox = document.getElementsByClassName("action-box");

const usernameLogin = document.getElementById("username-login");
const startBtn = document.getElementById("start-btn");


const regenerateBtn = document.getElementById("regenerate-btn");
const tryAgainBtn = document.getElementById("tryagain-btn");

const startHTML = actionBox[0].innerHTML; 

const generatorHTML = `
    <form id="generator">
        <label for="radio-1">Label</label>
        <input type="radio" id="radio-1">
        <label for="radio-2">Label2</label>
        <input type="radio" id="radio-2">

        <label for="genre">Genre:</label>
        <select id="genre" name="genre">
            <option value="x">x</option>
            <option value="x">x</option>
            <option value="x">x</option>
            <option value="x">x</option>
        </select>

        <label for="checkbox-1">Check1:</label>
        <input type="checkbox" id="checkbox-1" checked>
        <label for="checkbox-2" id="checkbox-2">Check2:</label>
        <input type="checkbox" id="checkbox-2">

        <button type="submit" id="generate-btn">Generate</button>
    </form>
`;

const resultHTML = `
    <p>Username's band will be called:</p>
    <h2>bandnamehere</h2>

    <button id="regenerate-btn">Regenerate</button>
    <button id="tryagain-btn">Try Again</button>
`;

startBtn.addEventListener("click", async () => {
    // TODO: get form data
    actionBox[0].innerHTML = generatorHTML; 

    const generateBtn = document.getElementById("generate-btn");
    generateBtn.addEventListener("click", async () => {
        // TODO: get form data
        actionBox[0].innerHTML = resultHTML;

        regenerateBtn.addEventListener("click", async () => {
            // TODO: change only band name and display new result
        });

        tryAgainBtn.addEventListener("click", async () => {
            actionBox[0].innerHTML = startHTML;
        });
    });
});


