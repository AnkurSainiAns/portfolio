let shtmlEl = document.getElementById("shtml")
let scssEl = document.getElementById("scss")
let scodeDisplayEl = document.getElementById("scodeDisplay")
shtmlEl.addEventListener("click",function(){
    console.log("click to ho rha hai")
    scodeDisplayEl.textContent = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shringar.com</title>
    <link rel="stylesheet" href="style.css">
    <header>

        <nav>
            <a href="#home">Home</a>
            <a href="#about">Shop</a>
            <a href="#services">About</a>
            <a href="#contact">Contact</a>
        </nav>
        <div class="logo">Shringar</div>


    </header>
</head>

<body>

    <div class="banner">
        <p class="h1">WOMEN ACCESSORIES</p>
        <p class="h2">Presented by </p>
        <h1 class="title">Shringar</h1>
        <p class="h3">Latest Collection of Women Accessories</p>
        <a href="#shop" class="shop-button">Shop Now</a>
    </div>
    <div class="section">
        <div class="point1">

            <h1> Latest Collection</h1>
            <p>The latest collection of women’s accessories for 2025 showcases a blend of classic elegance and
                contemporary flair, offering a variety of options to enhance any ensemble
            </p>
        </div>
        <div class="point2">
            <h1> +250,000 satisfied customers</h1>
            <p>We believe in building trust with quality, affordability, and outstanding customer service. Because when
                our customers are happy, we shine even brighter!
            </p>
        </div>
        <div class="point3">
            <h1> Free delivery</h1>
            <p>We believe that shopping for your favorite jewelry should be as delightful as wearing it! That’s why we
                offer FREE DELIVERY across India on all orders
            </p>
        </div>
    </div>
    <div class="slider">
        <div class="img1"><img src="\web\New folder\.png" alt="1st Image">
            <a href="#shop" class="shop">Shop Now</a>
        </div>
        <div class="img1"><img src="\web\New folder\.png" alt="2nd Image">
            <a href="#shop" class="shop">Shop Now</a>
        </div>
        <div class="img1"><img src="\web\New folder\.png" alt="3rd Image">
            <a href="#shop" class="shop">Shop Now</a>
        </div>
        <div class="img1"><img src="\web\New folder\.png" alt="4th Image">
            <a href="#shop" class="shop">Shop Now</a>
        </div>
        <div class="img1"><img src="\web\New folder\.png" alt="5th Image">
            <a href="#shop" class="shop">Shop Now</a>
        </div>
        <div class="img1"><img src="\web\New folder\.png" alt="6th Image">
            <a href="#shop" class="shop">Shop Now</a>
        </div>
    </div>
    <div class="section2">
        <div class="mid-heading">
            <h1 class="gift-line">The perfect gift for Someone special</h1>
        </div>
        <div class="mid-subheading">
            <h6 class="happy-cus">100+ happy Customers</h6>
            <p class="happy-message">We believe in building trust with quality, affordability, and outstanding customer
                service. Because when
                our customers are happy, we shine even brighter!
            </p>
        </div>
    </div>

    <div class="cat-heading">
        <h1> Shop By Category</h1>
    </div>
    <div class="cat-section">
        <div class="cat1"><img src="\web\New folder\.png" alt="cat1">
            <a href="#shop" class="shop">Shop Now</a>
        </div>
        <div class="cat2"><img src="\web\New folder\.png" alt="cat2">
            <a href="#shop" class="shop">Shop Now</a>
        </div>
        <div class="cat3"><img src="\web\New folder\.png" alt="cat3">
            <a href="#shop" class="shop">Shop Now</a>
        </div>

    </div>
    <div class="space"></div>
    <div class="cat-section2">
        <div class="cat4"><img src="\web\New folder\.png" alt="cat4">
            <a href="#shop" class="shop">Shop Now</a>
        </div>
        <div class="cat5"><img src="/web/New folder/.png" alt="cat5">
            <a href="#shop" class="shop">Shop Now</a>
        </div>
        <div class="cat6"><img src="\web\New folder\.png" alt="cat6">
            <a href="#shop" class="shop">Shop Now</a>
        </div>

    </div>

    <div class="space1"></div>

    <div class="story">
        <p class="story1"> Stories by our customers
        </p>
        <div class="cust-tag">
            <p> Customer Reviews</p>
        </div>
    </div>


    <div class="review">
        <div class="review1">
            <img src="\web\star.png" alt="review1" class="star" />
            <p class="review-text">“I bought these earrings for my sister's wedding, and they were a hit! Everyone
                complimented her on them.”</p>
            <div class="both1">

                <img src="\web\webp\.png" alt="review1" class="box1" />

                <div class="reviewer-name">
                    <p>- Sharmitha Das <br> Kolkata</p>
                </div>

            </div>
        </div>
        <div class="review2">
            <img src="\web\star.png" alt="review2" class="star" />
            <p class="review-text">“I bought these earrings for my sister's wedding, and they were a hit! Everyone
                complimented her on them.”</p>
            <div class="both2">

                <img src="\web\webp\.png" alt="review2" class="box2" />

                <div class="reviewer-name">
                    <p>- Nisha <br> Pilani</p>
                </div>

            </div>
        </div>
        <div class="review3">
            <img src="\web\star.png" alt="review3" class="star" />
            <p class="review-text">“I love the variety of styles available. I can find something for every occasion!”
            </p>
            <div class="both3">

                <img src="\web\webp\.png" alt="review3" class="box3" />

                <div class="reviewer-name">
                    <p>- Neha <br> Mumbai</p>
                </div>

            </div>
        </div>
        <div class="review4">
            <img src="\web\star.png" alt="review4" class="star" />
            <p class="review-text">“The customer service was excellent! They helped me choose the perfect gift for my
                friend.”</p>
            <div class="both4">

                <img src="\web\webp\.png" alt="review4" class="box4" />

                <div class="reviewer-name">
                    <p>- Bhumika Koirala <br> Siliguri</p>
                </div>

            </div>
        </div>
    </div>

    <div class="slid">
        <div class="slid1"><img src="\web\webp\slid5.webp" alt="slid1">
            <a href="#shop" class="shop1">Shop Now</a>
        </div>
        <div class="slid2"><img src="\web\webp\slid11.webp" alt="slid2">
            <a href="#shop" class="shop1">Shop Now</a>
        </div>
        <div class="slid3"><img src="\web\webp\slid4.webp" alt="slid3">
            <a href="#shop" class="shop1">Shop Now</a>
        </div>
        <div class="slid4"><img src="\web\webp\slid3.webp" alt="slid4">
            <a href="#shop" class="shop1">Shop Now</a>
        </div>
        <div class="slid5"><img src="\web\webp\slid1.webp" alt="slid5">
            <a href="#shop" class="shop1">Shop Now</a>
        </div>
        <div class="slid5"><img src="\web/webp/slid5.webp" alt="slid5">
            <a href="#shop" class="shop1">Shop Now</a>
        </div>
    </div>
    <div class="space"></div>
    <div class="cate">
        <h1> Category</h1>
    </div>

    <div class="cat-list">
        <div class="lis">
            <ul>
                <li><a href="#cat1">Bangles</a></li>
                <li><a href="#cat2">Earrings</a></li>
                <li><a href="#cat3">Kaleera</a></li>
                <li><a href="#cat4">Manng Tikka</a></li>
                <li><a href="#cat5">Necklaces</a></li>
                <li><a href="#cat6">Rings</a></li>
            </ul>
        </div>
    </div>
    <div class="space"></div>

</body>



<footer>
    <div class="foot">
        <div class="logo-f">
            <h1 class="footer-logo">Shringar</h1>
            <p class="footer-tagline">Saini Samaj Dhramshala,</p>
            <p class="footer-tagline">Rajpura, Pilani -333031</p>
            <p class="footer-tagline">Rajasthan, India</p>
            <p>Follow us on:</p>
            <a href="https://www.facebook.com/shringar" target="_blank">Facebook</a>
            <a href="https://www.instagram.com/shringar" target="_blank">Instagram</a>
            <a href="https://www.twitter.com/shringar" target="_blank">Twitter</a>
        </div>
        <div class="quick">
            <h1 class="quick-links">Quick Links</h1>
            <ul class="quick-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">Shop</a></li>
                <li><a href="#category">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        <div class="customer-rating">
            <h1 class="customer-rating">Customer Rating</h1>
            <p class="rating">4.8/5</p>
            <p class="rating-text">Based on 250,000+ reviews</p>
            <img src="\web\star.png" alt="rating" class="star" />
        </div>
        <div class="search-products">
            <h1 class="search-products">Search Products</h1>
            <p class="search-text">Looking for something specific? Try a search below!</p>
            <input type="text" placeholder="Search for products...">
            <button type="submit">Search</button>
        </div>
    </div>
    <div class="footer-end">
        <p>&copy; 2025 Shringar.com All rights reserved.</p>

    </div>
</footer>

</html>`})


//css 
scssEl.addEventListener("click",function(){
    console.log("click to ho rha hai")
    scodeDisplayEl.textContent = `.banner {
    width: 100%;
    height: 500px;
    background-color: red;
    background-image: url(main.webp);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: block;
    margin-top: 100px;
    color: white;
    text-align: center;
}

.logo {
    display: flex;
    width: 100px;
    height: 100px;
    padding-left: 70px;
    position: absolute;
    top: 35px;
    left: 20px;
    font-size: 20px;
    font-weight: bold;
}

nav {
    position: absolute;
    top: 50px;
    right: 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    font-size: 20px;
}

.h1 {
    font-size: 20px;
    padding-top: 50px;
}

.h2 {
    font-size: 20px;
    padding-top: 2px;
}

.title {
    font-size: 50px;
    padding-top: 5px;
}

.h3 {
    font-size: 20px;
    padding-top: 5px;
}

.shop-button {
    background-color: rgb(227, 56, 9);
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 20px;
}
.section{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 50px;
    padding: 20px;
}
.slider {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 20px;
    margin-top: 50px;
    flex-wrap: wrap;
    
}
.shop{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: rgb(227, 56, 9);
    color: white;
    border: none;
    padding: 10px;
    width: 100px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 20px;
    text-align: center;
    margin-left: 35%;
    }
.section2 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin-top: 50px;
}

.mid-heading {
    font-size: 30px;
    text-align: center;
    margin-top: 20px;
    
}
.mid-subheading{
    font-size: 20px;
    text-align: center;
    margin-top: 10px;
    margin-left: 0px;
    margin-right: 0px;
}
.gift-line {
    font-size: 45px;
    text-align: left;
    margin-top: 10px;
    padding-left: 100px;
   
}
.happy-message {
    font-size: 20px;
    text-align: left;
    margin-top: 0px;
    padding-left: 10px;
    border-left: 5px solid black;
    
}
.happy-cus{
    font-size: 30px;
    text-align: left;
    margin-top: 10px;
    padding-left: 10px;
    margin-bottom: 20px;
    
}
.cat-heading {
    text-align: center;
    font-size: 25px;
    margin-top: 20px;
}
.cat-section {

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin-top: 50px;
    gap: 2px;
}
.cat1,.cat2, .cat3 {
    width: 100%;
    height: 300px;
    border: none;
    cursor: pointer;
    margin-top: 20px;
    text-align: center;
}
.cat-section2{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin-top: 50px;
    gap: 20px;
}
.cat4,.cat5, .cat6 {
    width: 100%;
    height: 300px;
    border: none;
    cursor: pointer;
    margin-top: 20px;
    text-align: center;
    align-items: center;
}
.space{
    border: 2px solid black;
    width: 100px;
    height: 0px;
    margin-top: 100px;
    margin-left: 45%;
    margin-right: 50%;
}
.story1{
    text-align: center;
    font-size: 25px;
    margin-top: 50px;
    margin-bottom: 0px;
    margin-top: 100px;
}
.cust-tag{
    text-align: center;
    font-size: 50px;
    margin-top: -35px;

}
.story{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}
.space1{
    width: 100%;
    border: 1px solid black;
    margin-top: 100px;
}
.review{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 50px;
    padding: 20px;
    gap: 20px;
}

.both1,.both2,.both3,.both4 {
    display: flex;
}
.box1,.box2,.box3,.box4 {
    width: 75px;
    height: 85px;
    border-radius: 50%;
    margin-left: 20px;
}
.reviewer-name{
    padding: 20px;
}
.review{
    margin: 70px;
}
.slid{
    display: flex;
    text-align: center;
    /* justify-content: center; */
    align-items: center;
    margin-top: 50px;
    padding: 0px;
    margin: 0px;
    gap: 20px;
    flex-wrap: wrap;
     
}
.cate{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 50px;
    padding: 20px;
    gap: 20px;
}
.cat-list{
    width: 1000px;
    height: 800px;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* margin: 50px; */
    /* margin-left: 200px; */
    background-image: url(lead-indian-bridal-makeup-fotowalle.webp);
    background-size: cover;

}
.lis{
    margin-left: 20px;
    margin-top: 50px;
    font-size: 50px;
}
.foot{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* text-align: center; */
    margin-top: 50px;
    padding: 20px;
    gap: 140px;
    

}
.slid1,.slid2,.slid3,.slid4,.slid5{
    width: 300px;
    display: flex;
    flex-direction: column;
   
}`})