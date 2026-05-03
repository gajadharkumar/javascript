
let nm=document.querySelector("#name");
let form=document.getElementById("form");
nm.addEventListener("submit",function(e){
    e.defaultPrevented();
    if(nm=this.ariaValueMax.length<=2){
        document.querySelector("#hide").style.display="initial";

    }else{
        document.querySelector("#hide").style.display="none";
    }
})