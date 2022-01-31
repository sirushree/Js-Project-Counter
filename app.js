let countNum = document.getElementById("countNum");
let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");

 let integer = 0;

 
increase.addEventListener('click', function(){
    console.log("clicked");
    integer+= 1;
    countNum.innerHTML = integer;
});

decrease.addEventListener('click', function(){
    console.log("clicked");
    integer-=1;
    countNum.innerHTML = integer;
});

reset.addEventListener('click', function(){
    integer = 0;
    countNum.innerHTML = integer;
});