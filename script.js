
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");

const error = document.getElementById("error");

const emailOne = document.getElementById("email-one");
const passOne = document.getElementById("password-one");

let name1 = "";
let name2 = "";
let emailVar = "";
let passwordVar = "";

const emailArray = [];
const passArray = [];

function createAccount(event)
{
    // console.log('yeet')
    event.preventDefault();
    // console.log('yeet 2: electric boogaloo')
    name1 = firstName.value;
    name2 = lastName.value;
    emailVar = email.value;
    passwordVar = password.value; 

    repasswordVar = repassword.value;

    if(passwordVar !== repasswordVar)
    {
        error.style.opacity = 1;
    }
    else 
    {
        emailArray.push(emailVar);
        passArray.push(passwordVar);
        window.location.href = "./anatomy.html";
    }
}

//Log out functionality for the "anatomy" page:
function logOut()
{
    window.location.href = "./startupPage.html"
}


function authenticate(event)
{
    event.preventDefault();

    emailVar = emailOne.value;
    passwordVar = passOne.value; 

    for (let i=0; i<emailArray.length; i++) {
        if(emailVar === emailArray[i] && passwordVar === passArray[i]) {
            window.location.href = "./anatomy.html"
        }
    }
}

function logIn()
{
    window.location.href = "./loginPage.html"
}

function signUp()
{
    window.location.href = "./index.html"
}

