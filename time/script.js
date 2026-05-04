
// let nav=document.querySelector(".nav nav");
// nav.addEventListener("click",function(e){
//     alert("You have clicked the button");
// });

let count=10;
let intervel = setInterval(function(){
    if(count>=1){
        count--;
        console.log(count);

        }
        else{
            clearInterval(intervel);
        }
},1000);