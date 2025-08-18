let icEl = document.getElementById("ic")
let acEl = document.getElementById("ac")
let scEl = document.getElementById("sc")
let idisplayEl = document.getElementById("idisplay")
let adisplayEl = document.getElementById("adisplay")
let sdisplayEl = document.getElementById("sdisplay")
icEl.addEventListener("click", function () {

    idisplayEl.innerHTML = `<img id="certimg" src="img/cert/iant.jpg">`
})

acEl.addEventListener("click", function () {

    adisplayEl.innerHTML = `<img id="certimg" src="img/cert/CompTIA IT Fundamentals Certification certificate Ankur saini_page-0001.jpg">`
})

scEl.addEventListener("click", function () {

    sdisplayEl.innerHTML = `<img id="certimg" src="img/cert/ankursaini scsu_page-0001.jpg">`
})

// close img

icEl.addEventListener("dblclick", function () {

    idisplayEl.innerHTML = ""
})
acEl.addEventListener("dblclick", function () {

    adisplayEl.innerHTML = ""
})

scEl.addEventListener("dblclick", function () {

    sdisplayEl.innerHTML = ""
})

let webcEl = document.getElementById("webc")
let semcEl = document.getElementById("semc")
let htmlcEl = document.getElementById("htmlc")
let webdisplayEl = document.getElementById("webdisplay")
let semdisplayEl = document.getElementById("semdisplay")
let htmldisplayEl = document.getElementById("htmldisplay")

webcEl.addEventListener("click", function () {

    webdisplayEl.innerHTML = `<img id="certimg" src="img/cert/website.jpg">`
})

semcEl.addEventListener("click", function () {

    semdisplayEl.innerHTML = `<img id="certimg" src="img/cert/ankur-saini_25_page-0001.jpg">`
})

htmlcEl.addEventListener("click", function () {

    htmldisplayEl.innerHTML = `<img id="certimg" src="img/cert/Learn HTML.jpg">`
})

// close img

webcEl.addEventListener("dblclick", function () {

    webdisplayEl.innerHTML = ""
})
semcEl.addEventListener("dblclick", function () {

    semdisplayEl.innerHTML = ""
})

htmlcEl.addEventListener("dblclick", function () {

    htmldisplayEl.innerHTML = ""
})


let rscitcEl = document.getElementById("rscitc")
let rscitdisplayEl = document.getElementById("rscitdisplay")
rscitcEl.addEventListener("click", function () {

    rscitdisplayEl.innerHTML = `<img id="certimg" src="img/cert/rscit.jpg">`
})

// close img

rscitcEl.addEventListener("dblclick", function () {

    rscitdisplayEl.innerHTML = ""
})