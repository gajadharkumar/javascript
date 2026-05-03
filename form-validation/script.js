
// let nm=document.querySelector("#name");
// let form=document.getElementById("form");
// nm.addEventListener("submit",function(e){
//     e.defaultPrevented();
//     if(nm=this.ariaValueMax.length<=2){
//         document.querySelector("#hide").style.display="initial";

//     }else{
//         document.querySelector("#hide").style.display="none";
//     }
// })


let email=document.querySelector("#email");
let password=document.querySelector("#password");    
let form=document.querySelector("#form");
form.addEventListener("submit",function(e){
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    let emailans=emailRegex.test(email.value);
    let passwordans=passwordRegex.test(password.value);
    
    let emailError = email.nextElementSibling;
    let passwordError = password.nextElementSibling;
    
    if(!emailans){
        emailError.textContent="Invalid email format";
    } else {
        emailError.textContent="";
    }
    
    if(!passwordans){
        passwordError.textContent="Password must contain uppercase, lowercase, number, special character, and be 8+ characters";
    } else {
        passwordError.textContent="";
    }
});