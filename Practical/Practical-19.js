//Selectors

const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const form3 = document.getElementById('form3');

const next1 = document.getElementById('next1');
const next2 = document.getElementById('next2');
const back1 = document.getElementById('back1');
const back2 = document.getElementById('back2');
const submit = document.getElementById('submit');
const progress = document.getElementById("progress");

const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const linkedin = document.getElementById('linkedin');
const github = document.getElementById('github');
const fb = document.getElementById('fb');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const mobile = document.getElementById('mobile');

// Event Handler

next1.onclick = function(){
    if(checkInput1()){
        form1.style.left = "-450px";
        form2.style.left = "40px";
        progress.style.width = "240px";
    }
}

back1.onclick = function(){
    form1.style.left = "40px";
    form2.style.left = "450px";
    progress.style.width = "120px";
}

next2.onclick = function(){
    if(checkInput2()){
        form2.style.left = "-450px";
        form3.style.left = "40px";
        progress.style.width = "360px";
    }
}

back2.onclick = function(){
    form2.style.left = "40px";
    form3.style.left = "450px";
    progress.style.width = "240px";
}

submit.onclick=function(){
    checkInput3();
}

//function

function checkInput1(){
    var correct = true;
    const emailValue = email.value.trim();
    const password1Value = password1.value.trim();
    const password2Value = password2.value.trim();
    if(emailValue === ''){
        correct=false;
        alert("Email ID can not be blank");
    }
    else if(!isEmailValid(emailValue)){
        correct=false;
        alert("Email ID is not Valid");
    }
    if(password1Value === ''){
        correct=false;
        alert("Password can not be blank");
    }
    if(password2Value === ''){
        correct=false;
        alert("Password can not be blank");
    }
    else if(password2Value != password1Value){
        correct=false;
        alert("Passwords not matched");
    }
    return correct;
}


function checkInput2(){
    var correct = true;
    const linkedinValue = linkedin.value.trim();
    const githubValue = github.value.trim();
    const fbValue = fb.value.trim();
    if(linkedinValue === ''){
        correct=false;
        alert("Linkedin ID can not be blank");
    }

    else if(!isLinkedinValid(linkedinValue)){
        correct=false;
        alert("Linkedin is not valid");
    }
    if(githubValue === ''){
        correct=false;
        alert("Github Id can not be blank");
    }
    if(fbValue === ''){
        correct=false;
        alert("Facebook Id can not be blank");
    }
    return correct;
}

function checkInput3(){
    var correct = true;
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const mobileValue = mobile.value.trim();
    if(fnameValue === ''){
        correct=false;
        alert("First Name can not be blank");
    }
    if(lnameValue === ''){
        correct=false;
        alert("Last Name can not be blank");
    }
    if(mobileValue === ''){
        correct=false;
        alert("Mobile Number can not be blank");
    }
    else if(!isMobileValid(mobileValue)){
        correct=false;
        alert("Mobile Number is not valid");
    }
    return correct;
}

function isLinkedinValid(linkedinValue){
    return /^http(s)?:\/\/(www\.)?linkedin\.com\/in\/.*$/.test(linkedinValue);
}

function isEmailValid(emailValid){
    return /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,3})$/.test(emailValid);
}

function isMobileValid(mobileValid){
    return /^([6789]{1,1})([0-9]{9,9})$/.test(mobileValid);
}