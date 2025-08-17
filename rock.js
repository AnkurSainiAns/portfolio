let rhtmlEl = document.getElementById("rhtml")
let rcssEl = document.getElementById("rcss")
let rjsEl = document.getElementById("rjs")
let rcodeDisplayEl = document.getElementById("rcodeDisplay")
rhtmlEl.addEventListener("click", function () {
    console.log("click to ho rha hai")
    rcodeDisplayEl.textContent = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game</title>
    <link rel="stylesheet" href="style.css">

</head>

<body>
    <h1>Welcome to the Game</h1>
    <p>Rock Paper Scissor</p>
    <div id="space"> </div>
    <p id="result"></p>
    <button id="StartGame">Start Game </button>
    <button id="Reset">Reset Game </button>
    
    <script src="script.js"></script>
</body>

</html>`})

// css
rcssEl.addEventListener("click", function () {
    console.log("click to ho rha hai")
    rcodeDisplayEl.textContent = `h1{
    color: red;
    display: flex;
    justify-content: center;

}
p{
    color: green;
    display: flex;
    justify-content: center;
}
button{
    color: black;
    display: flex;
    justify-content: center;
    margin: 10px;
    background-color: rgba(247, 168, 0, 0.473);
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
}

#space{
    padding-top: 100px;
    padding-left: 25px;
    width: 200px;
    height: 200px;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    color: blue;
    background-color: rgba(51, 191, 154, 0.494);
    font-size: 20px;
}   
#result{
    width: 200px;
    height: 20px;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;

}`})

//js
rjsEl.addEventListener("click", function () {
    console.log("click to ho rha hai")
    rcodeDisplayEl.textContent = `let Game = ["🪨", "📜", "✂️"]
let spaceEl = document.getElementById("space")
let startGame = document.getElementById("StartGame")
let resultEl = document.getElementById("result")
startGame.addEventListener("click", function () {
    let random = Math.floor(Math.random() * Game.length)
    let random1 = Math.floor(Math.random() * Game.length)
    spaceEl.textContent = "You chose " + Game[random] + "\n Computer chose " + Game[random1]

    if (random === random1) {
        resultEl.textContent = " It's a tie!"
    } else if ((random === 0 && random1 === 2) || 
     (random === 1 && random1 === 0) || 
     (random === 2 && random1 === 1)) {
        resultEl.textContent = " You win!"
    } else {
        resultEl.textContent = " Computer wins!"
    }
})
Reset.addEventListener("click", function () {
    spaceEl.textContent = ""
    resultEl.textContent = ""
})`})