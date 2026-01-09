let smallimages= document.getElementsByClassName("oldImg");
for (let i = 0; i < smallimages.length; i++) {
    smallimages[i].src="assets/spiderman_img.png";
    console.log('value of image no. ${i} is changed');
    
}
let newP=document.createElement('p');
newP.innerText="hey!i am para";
document.querySelector("body").append(newP);
newP.classList.add('red');
let head= document.createElement('h3');
head.innerText=" i am a blue h3";
document.querySelector("body").append(head);
head.classList.add('blue');


let divi=document.createElement("div");
let pa=document.createElement("p");
let he=document.createElement("h1");
he.innerText=" i am in a div";
pa.innerText="me too!";
divi.append(he);
divi.append(pa);

divi.classList.add('cl');
document.querySelector("body").append(divi);
let but=document.createElement("button");
but.innerText=" click me.";
document.querySelector("body").append(but);
let inp=document.createElement("input");
document.querySelector("body").append(inp);
inp.setAttribute("placeholder","username");
but.setAttribute("id","btn");
let b1=document.querySelector("#btn");
b1.classList.add("li");
let hh=document.createElement("h1");
hh.innerHTML= "<u>dom practice</u>";
document.querySelector("body").append(hh);
hh.classList.add("heading");
