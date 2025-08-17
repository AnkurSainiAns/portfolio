let ghtmlEl = document.getElementById("ghtml")
let gcssEl = document.getElementById("gcss")
let gjsEl = document.getElementById("gjs")
let gcodeDisplayEl = document.getElementById("gcodeDisplay")
ghtmlEl.addEventListener("click", function () {
    console.log("click to ho rha hai")
    gcodeDisplayEl.textContent = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Google Web</title>
    <link rel="stylesheet" href="styles.css">

</head>

<body>

    <h1> Google</h1>
    <input type="text" id="Searchbox">
    <p id="Space"> </p>
    <button id="SearchButton">Search</button>
    <button id="SaveButton">Save</button>
    <ul id="ul-el">
    </ul>
    <div id="welcome"></div>
    <div id="fun"><div>
    <script src="scripts.js"></script>


   
</body>

</html>`})

// css

gcssEl.addEventListener("click", function () {
    console.log("click to ho rha hai")
    gcodeDisplayEl.textContent = `h1{
    text-align: center;
    color: black;
}
#Searchbox {
    width: 170px;
    height: 30px;
    border: 2px solid #ccc;
    display: flex;
    justify-content: center;
    margin: 20px auto;
}
#SearchButton, #SaveButton {
    width: 100px;
    height: 30px;
    margin: 5px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin-left: auto;
    margin-right: auto;
    
}
.btn{
    display: flex;
    gap: 5px;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    flex-direction: row;
}`})

// js
gjsEl.addEventListener("click", function () {
    console.log("click to ho rha hai")
    gcodeDisplayEl.textContent = `let GoogleWebStore = ["Google", "Google Search", "Google Chrome", "Google Drive", "Google Maps",
     "Google Photos", "Google Play Store", "Google Translate", "Gmail", "YouTube"];
let SearchboxEl = document.getElementById("Searchbox");
let SpaceEl = document.getElementById("Space");
let SearchButtonEl = document.getElementById("SearchButton");
let SaveButtonEl = document.getElementById("SaveButton");
let ulEl = document.getElementById("ul-el");
const welcomeEl = document.getElementById("welcome");
let funEl = document.getElementById("fun");

SearchButtonEl.addEventListener("click", function () {
    let text = SearchboxEl.value;
    GoogleWebStore.push(text);
    console.log("added New item", text);
    ulEl.innerHTML += "<li> <a href ='#'>" + text + "</a></li>";

});
SaveButtonEl.addEventListener("click", function () {
    SpaceEl.textContent = "You have added: " + GoogleWebStore.join(", ");
    for (let i = 0; i < GoogleWebStore.length; i++) {
        console.log(GoogleWebStore[i]);
    }
});
`})