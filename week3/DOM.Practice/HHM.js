let divs = document.querySelectorAll(".box");

let a = 1;
for(div of divs){
    div.innerText = `new Unique value ${a}`;
    a++;
}