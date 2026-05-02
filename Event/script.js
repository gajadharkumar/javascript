
// let input= document.querySelector("input")
// input.addEventListener("input",function(){
//     console.log("typed");
// })
// let input= document.querySelector("input")
// input.addEventListener("input",function(data){
//     console.log(data);
// })

// Click
// document.getElementById("btn").addEventListener("click", () => {
//   alert("Button Clicked");
// });

// // Double Click
// document.getElementById("btn").addEventListener("dblclick", () => {
//   console.log("Double Click");
// });

// // Mouse Events
// let box = document.getElementById("box");
// box.addEventListener("mouseenter", () => console.log("Mouse Enter"));
// box.addEventListener("mouseleave", () => console.log("Mouse Leave"));
// box.addEventListener("mousemove", () => console.log("Mouse Moving"));

// // Keyboard Events
// document.addEventListener("keydown", (e) => {
//   console.log("Key Down:", e.key);
// });

// document.addEventListener("keyup", (e) => {
//   console.log("Key Up:", e.key);
// });

// // Input Event
// let input = document.getElementById("input");
// input.addEventListener("input", () => {
//   console.log("Typing:", input.value);
// });

// // Focus & Blur
// input.addEventListener("focus", () => console.log("Focused"));
// input.addEventListener("blur", () => console.log("Blurred"));

// // Change Event ye tab chalta hai jab koi input ya select area mai koi change hai
// document.getElementById("select").addEventListener("change", function () {
//   console.log("Selected:", this.value);
// });

// // Form Submit
// document.getElementById("form").addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("Form Submitted");
// });

// // Window Events
// window.addEventListener("load", () => console.log("Page Loaded"));
// window.addEventListener("resize", () => console.log("Window Resized"));
// window.addEventListener("scroll", () => console.log("Scrolling"));

// // Right Click
// document.addEventListener("contextmenu", (e) => {
//   e.preventDefault();
//   console.log("Right Click Disabled");
// });

// // Drag & Drop
// let dragItem = document.getElementById("drag");
// let dropZone = document.getElementById("drop");

// dragItem.addEventListener("dragstart", () => console.log("Drag Start"));
// dragItem.addEventListener("dragend", () => console.log("Drag End"));

// dropZone.addEventListener("dragover", (e) => e.preventDefault());
// dropZone.addEventListener("drop", () => console.log("Dropped"));

// // Event Object Example
// document.addEventListener("click", (e) => {
//   console.log("Click Position:", e.clientX, e.clientY);
// });



//  let sel=document.querySelector("select");
// let device=document.querySelector("#device")
// sel.addEventListener("change",function(dets){
//   device.textContent=`${dets.target.value} device Selected`
// });

// let h1=document.querySelector("h1");
// window.addEventListener("keydown",function(dets){
//   if(dets.key== " "){
// h1.textContent="spc";
//   }else
//   h1.textContent=`${dets.key}`

// })

// upload file
let btn=document.querySelector("#btn");
let fileinp=document.querySelector("#fileinp");
btn.addEventListener("click",function(){
  fileinp.click();
})
fileinp.addEventListener("change",function(dets){

  const file=dets.target.files[0];
if(file){
  btn.textContent=file.name;
}
})