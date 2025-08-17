let bhtmlEl = document.getElementById("bhtml")
let bcssEl = document.getElementById("bcss")
let bjsEl = document.getElementById("bjs")
let bcodeDisplayEl = document.getElementById("bcodeDisplay")
bhtmlEl.addEventListener("click", function () {
    console.log("click to ho rha hai")
    bcodeDisplayEl.textContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>game</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="main">
        <h1>Blackjack</h1>
        <p>Try to get as close to 21 as possible without going over.</p>
        
        <button id="startButton" onclick="startGame()">Start Game</button>
        <p id="card1">first Card:</p>
        <p id="card2">Second Card:</p>
        <p id="sum">Sum: </p>
        <p id="result">Result: </p>
        <button id ="Reset" onclick="Reset()"> Reset </button>
    </div>
    <script src="script.js"></script>

</body>
</html>`})

// cc
bcssEl.addEventListener("click", function () {
    console.log("click to ho rha hai")
    bcodeDisplayEl.textContent = `.main {
    width: 600px;
    height: 550px;
    background-image: url("light-green-yellow-blur-background-vector.jpg");
    background-size:cover;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 40px;
}
button {
    background-color: black;
    color: white;
    padding: 10px;
    text-align: center;
    margin: 4px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    width: 300px;
    font-size: 20px;
    margin-left: auto;
    margin-right: auto;
}
body{
    background-image: url("download.jpg");
   
}
#result {
    font-size: 25px;
    color: black;
    margin-top: 20px;
}`})


// js
bjsEl.addEventListener("click", function () {
    console.log("click to ho rha hai")
    bcodeDisplayEl.textContent = `
let card1el = document.getElementById("card1");
let card2el = document.getElementById("card2");
let sumel = document.getElementById("sum");
let resultel = document.getElementById("result");

function startGame() {
    card1 = Math.floor(Math.random() * 11) + 1; 
    card2 = Math.floor(Math.random() * 11) + 1; 
    sum = card1 + card2;
    card1el.innerHTML = "First Card: " + card1;
    card2el.innerHTML = "Second Card: " + card2;
    sumel.innerHTML = "Sum: " + sum;
    if (sum < 21) {
        result = Sum Of Cards is = {sum} You are safe 😅;
    } else if (sum === 21) {
        result = Sum Of Cards is = {sum} "You win 🤩";
    } else {
        result = Sum Of Cards is = {sum} You lose! 😭;
    }
    resultel.innerHTML = result;
}

function Reset() {
    card1el.innerHTML = "First Card: ";
    card2el.innerHTML = "Second Card: ";
    sumel.innerHTML = "Sum: ";
    resultel.innerHTML = "Result: ";
}
`})