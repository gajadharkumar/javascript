//  let abcdvv= document.querySelector(".abcdvv")
//  abcdvv.addEventListener("mousemove",function(event){
//     abcdvv.style.backgroundColor="blue"
//  });
//  abcdvv.addEventListener("mouseout",function(event){
//     abcdvv.style.backgroundColor="red"
//  })



let abcd=document.querySelector(".abcd")

window.addEventListener("mousemove",function(event){
    abcd.style.top=event.clientY+"px";
    abcd.style.left=event.clientX+"px";
});







