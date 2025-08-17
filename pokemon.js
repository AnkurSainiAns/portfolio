let phtmlEl = document.getElementById("phtml")
let pcssEl = document.getElementById("pcss")
let pjsEl = document.getElementById("pjs")
let pcodeDisplayEl = document.getElementById("pcodeDisplay")
phtmlEl.addEventListener("click", function () {
    console.log("click to ho rha hai")
    pcodeDisplayEl.textContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ben Ten Game</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Welcome to PokeMon Game</h1>
    <p>Get ready to transform and battle!</p>
    <button id="StartGame">Start Game</button>
    <div id="space"> </div>
    <button id="Fight">Fight</button>
    <p id="result"></p>
    <button id="Reset">Reset</button>
    <script src="script.js"></script>

</body>
</html>`})

// css

pcssEl.addEventListener("click", function () {
    console.log("click to ho rha hai")
    pcodeDisplayEl.textContent = `
    h1{
    display: flex;
    justify-content: center;
    align-items: center;
    color: green;
    margin-top: 50px;
}
p {
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(14, 27, 17);
    margin-top: 20px;
}
#space {
    width: 400px;
    height: 200px;
    border: 2px solid rgb(85, 164, 90);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    color: darkgreen;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    background-color: rgba(85, 164, 90, 0.1);
}
#Fight{
    width: 200px;
    height: 50px;
    font-size: 30px;
    border: 2px solid black;
}
button {
    display: block;
    margin: 20px auto;
    padding: 10px 20px;
    background-color: rgb(85, 164, 90);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
`})

// js
pjsEl.addEventListener("click", function () {
    console.log("click to ho rha hai")
    pcodeDisplayEl.textContent = `
let Game = ["🥷", "🧟‍♂️", "🕷️", "🦂", "🦉", "🐍", "🐘", "🐊", "🦫", "🦔"]
let spaceEl = document.getElementById("space")
let startGameEl = document.getElementById("StartGame")
let fightEl = document.getElementById("Fight")
let resetEl = document.getElementById("Reset")
let resultEl = document.getElementById("result")
startGameEl.addEventListener("click", function () {
    spaceEl.textContent = "click fight to start the game "+"👇"
    resultEl.textContent = ""
})


fightEl.addEventListener("click", function () {
    let randomIndex = Math.floor(Math.random() * Game.length)
    let randomIndex2 = Math.floor(Math.random() * Game.length)

    spaceEl.textContent = Game[randomIndex] + "V/S" + Game[randomIndex2]
    if (randomIndex === randomIndex2) {
        resultEl.textContent = "it's a tie"
    } else if (randomIndex > randomIndex2) {
        resultEl.textContent = Game[randomIndex] + " wins"
    } else {
        resultEl.textContent = Game[randomIndex2] + " wins"
    }
})
resetEl.addEventListener("click", function () {
    spaceEl.textContent = ""
    resultEl.textContent = ""
    randomIndex = null
    randomIndex2 = null
})`})