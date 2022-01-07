
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");

const error = document.getElementById("error");

let name1 = "";
let name2 = "";
let emailVar = "";
let passwordVar = "";

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

    console.log(password.value);
    console.log(repassword.value);
    if(passwordVar !== repasswordVar)
    {
        error.style.opacity = 1;
    }
    else 
    {
        window.location.href = "./anatomy.html";
    }
}


