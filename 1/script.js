let header =document.createElement("header");
header.innerHTML="THIRUKKURAL"; 
document.body.append(header);

let div1 = document.createElement("div");
div1.setAttribute("class","image1");
let image = document.createElement("img");
image.setAttribute("class","img1");
image.setAttribute("src","thiru.jpg");
image.setAttribute("alt","No image");

div1.append(image);
document.body.append(div1);

let div2 = document.createElement("div");
div2.setAttribute("class","is");
let Input = document.createElement("input");
Input.setAttribute("type","search");
Input.setAttribute("id","input");
Input.setAttribute("placeholder","Enter 'thirukural' no");

let button = document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("id","b1");
button.addEventListener("click",click1)
button.innerHTML="Search";


div2.append(Input,button);
document.body.append(div2);
let div3 = document.createElement("div");
div3.setAttribute("class","content");


async function click1(){

    let Search1 = document.getElementById("input").value;
    let api = `https://api-thirukkural.vercel.app/api?num=${Search1}`;
    let url =await fetch(api);
    let res =await url.json();
    console.log(res);
    div3.innerHTML=`
    <div class="card">
    <div class="card-header">
    THIRUKURAL
    </div>
    <div class="card-body">
      <p class=p1> No: ${res.number} ${res.sect_tam}</p>
      <p class=p2>${res.chapgrp_tam}</p>
      <p class=p3>${res.chap_tam}</p>
      <p class=p4>${res.line1}</p>
      <p class=p4>${res.line2}</p>
        
    </div>
  </div> `;
    
    

}

document.body.append(div3);







