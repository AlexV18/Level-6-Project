
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

function createAccount()
{
    name1 = firstName.value;
    name2 = lastName.value;
    emailVar = email.value;
    passwordVar = password.value; 

    repasswordVar = repassword.value;

    if(password !== repasswordVar)
    {
        error.style.opacity = 1;
    }
}


