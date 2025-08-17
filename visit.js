// visiting card
let vhtmlEl = document.getElementById("vhtml")
let vcssEl = document.getElementById("vcss")
let vcodeDisplayEl = document.getElementById("vcodeDisplay")
vhtmlEl.addEventListener("click",function(){
    console.log("click to ho rha hai")
    vcodeDisplayEl.textContent =`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Visiting Card</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="visit">
        <div class="heading">
            <h1>Ankur Saini</h1>
            <p>Web Developer</p>
            <div id="link">
                <p><a href="https://github.com/AnkurSainiAns" target="_blank">GitHub Profile</a></p>
               <p><a href="https://www.linkedin.com/in/ankursainians/" target="_blank"> LinkedIn Profile       
                </a> </p>
            </div>
        </div>

        <div class="data">

            <h1>Address</h1>
            <p>Saini Samaj Dhramsala,Rajpura, Pilani, Jhunjhunu, Rajasthan.<br>
                Email:an2811@gmail.com. <br> Phone: +91 8824191058
            </p>

        </div>
    </div>
</body>

</html>`})



//css 
vcssEl.addEventListener("click",function(){
    console.log("click to ho rha hai")
    vcodeDisplayEl.textContent = `.heading {
    background-image: url(black\ and\ white\ particles\ GIF\ by\ sanderick.gif);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    width: 500px;
    height: 500px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
}
    
h1,p,h2 {
    color: white;
    text-align: center;
    font-size: 35px;
}

.data{
     background-image: url(black\ and\ white\ particles\ GIF\ by\ sanderick.gif);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    width: 500px;
    height: 500px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
}
#link {
    display: flex;
    font-size: 20px;
    gap: 10px;
    flex-direction: row;
    margin-top: 20px;
    cursor: pointer;margin: 10px;
}
a{
    color: red;
}
`})