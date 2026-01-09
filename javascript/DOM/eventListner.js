let Btn=document.querySelector("button")
Btn.addEventListener("click",function(){
    let h3=document.querySelector("h2");
    let randomcolor=change();
    h3.innerText=randomcolor;
    let div=document.querySelector("div");
   div.style.backgroundColor=randomcolor;
});

function change(){
   let red= Math.floor(Math.random()*255);
   let green= Math.floor(Math.random()*255);
   let blue= Math.floor(Math.random()*255);
   let color=`rgb(${red},${green},${blue})`;
   return color;
}