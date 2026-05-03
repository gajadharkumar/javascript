
//  jis pe event aayega agar up pe listener nahi hua to hAMRA event uske perent pe listnere khoojega

let ul=document.querySelector('ul');
ul.addEventListener('click',function(e){
    e.target.style.textDecoration='line-through';
})