
let count=0;
let progress=document.querySelector(".progress-bar")
let progressText=document.querySelector("#progressText")
//  setInterval(() => {
//     if(count<99){

//         count++;
//         progress.style.width = `${count}%`;
//         progressText.textContent = `${count}%`;
//     }
// }, 30);



let btn=document.querySelector("#startBtn")
btn.addEventListener("click",()=>{
 setInterval(() => {
    if(count<99){

        count++;
        progress.style.width = `${count}%`;
        progressText.textContent = `${count}%`;
    }
    else{
        document.querySelector("h2").textContent="Download Completed";
        clearInterval();
    }
}, 30);


})