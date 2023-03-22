let password="";
let password2="";

window.onload = function(){

//password confirmation check
const passwordConfirm = document.getElementById('confirmPassword');
passwordConfirm.addEventListener("change", updatePassConf);
function updatePassConf() {       
    console.log("password:"+password);
    const passmatch = document.getElementById('passMATCH');
    const passwordR = document.getElementById('confirmPassword');
    password2=passwordR.value;
    if(password2===password){
        console.log("passwords match!")
        passmatch.textContent=" ";
        return ;
    }
    else{
        console.log("passwords do not match!")
        passmatch.textContent="Passwords do not match!";
        return ;
    }    
}

//password field update
const passwordR = document.getElementById('password');
passwordR.addEventListener("change", updatePass);
function updatePass() {       
    const passwordR = document.getElementById('password');
    console.log("element:"+passwordR.value)
    password=passwordR.value;
    console.log("password:"+password);    
    return ;
}

};

