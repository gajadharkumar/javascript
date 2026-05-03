
let inp= document.querySelector("input");
let span= document.querySelector("span");
inp.addEventListener("input", function(dets){
    span .textContent= dets.target.value.length;

})