let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!";
console.log(newBtn);

let p = document.querySelector("p");
p.after(newBtn);

let newH1 = document.createElement("h1");
newH1.innerHTML = "Ganpati Bappa Moryaa !!!";
p.append(newH1);

let newH2 = document.createElement("h2");
newH2.innerHTML = "<b><i>Jay Shri Ram</i></b>";

document.querySelector("body").prepend(newH2);

newBtn.remove();

let node = document.createElement("li");
let textnode = document.createTextNode("Water");
node.appendChild(textnode);
document.getElementById("list").appendChild(node);
