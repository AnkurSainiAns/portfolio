let ihtmlEl = document.getElementById("ihtml")
let icssEl = document.getElementById("icss")
let igitEl = document.getElementById("iGit")
let icodeDisplayEl = document.getElementById("icodeDisplay")
ihtmlEl.addEventListener("click",function(){
    console.log("click to ho rha hai")
    icodeDisplayEl.textContent = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Instagram</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div id="all">
        <div id="img1">
            <!-- <img src="insta.png" alt="insta-image"> -->
        </div>
        <div id="loc">
            <div id="heading">
                <h1> Instagram</h1>



                <div id="form">
                    <form name="f1" action="login.php" method="post">
                        <div class="username">
                            <input type="text" name="username" placeholder="Phone number, username, or email" required>
                        </div>
                        <div class="password">
                            <input type="password" name="password" placeholder="Password" required>
                        </div>
                        <div class="submit">
                            <button type="submit" name="submit">Log In</button>
                        </div>
                    </form>

                </div>
                <div class="orm">
                    <div class="line1"></div>
                    <div class="or">OR</div>
                    <div class="line2"></div>
                </div>
                <div class="fb">
                    <div class="fb-logo"></div>

                    <div class="fb-text"><a href="https://www.facebook.com/">Log in with Facebook</a>
                    </div>
                </div>


                <div id="forget">
                    <a href="https://www.instagram.com/accounts/password/reset/">Forgot password?</a>
                </div>
                <div id="signup">
                    <p>Don't have an account? <a href="https://www.instagram.com/accounts/emailsignup/">Sign up</a></p>
                </div>
            </div>
        </div>
    </div>
</body>

</html>`

})


// css 

icssEl.addEventListener("click",function(){
    console.log("click to ho rha hai")
    icodeDisplayEl.textContent = `
body{
    margin: 0;
    padding: 0;
    background-color: #f0f2f5;
}
#all{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
}
#img1{
    width: 500px;
    height: 500px;
    background-image: url('insta.png');
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 150px;
    
}
#loc{
    display: flex;
    justify-content: center;
    align-items: center;
   
}
h1{
    font-size: 50px;
    font-family: instagram-sans;
    color: #262626;
    margin-top: -150px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -50px;

}
input,button{
    width: 300px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #dbdbdb;
    padding-left: 10px;
    margin-bottom: 10px;
}
button{
    width: 312px;
}
#heading{
    margin-top: 100px;
}
#form{
    margin-left: -40px;
}
button{
    background-color: #0095f6;
    color: white;
    font-weight: bold;
    border: none;
    cursor: pointer;
}
.orm{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -50px
}
.line1, .line2 {
    width: 100px;
    height: 1px;
    background-color: #dbdbdb;
}
.line1 {
    margin-right: 10px;
    margin-top: 15px;
}
.line2 {
    margin-left: 10px;
    margin-top: 15px;
}
.or {
    font-size: 14px;
    color: #262626;
    font-weight: bold;
    margin-top: 15px;
}
#forget, #signup {
    text-align: center;
    margin-top: 20px;
    margin-left: -50px;
}
.fb-logo{
    width: 20px;
    height: 20px;
    background-image: url('download.png');
    background-size: cover;
    display: inline-block;
    vertical-align: middle;
}
.fb{
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    margin-top: 20px;
    margin-left: -50px;
}
a{
    text-decoration: none;
    color: #0095f6;
}`})

