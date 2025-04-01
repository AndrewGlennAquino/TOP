const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const red = document.createElement("p");
red.classList.add("red")
red.style.color = "red";
red.textContent = "Hey I'm red!";
container.appendChild(red);

const blue = document.createElement("h3");
blue.classList.add("blue");
blue.style.color = "blue";
blue.textContent = "I'm a blue h3!";
container.appendChild(blue);

const box = document.createElement("div");
box.classList.add("box");
box.style.border = "2px solid black"
box.style.backgroundColor = "pink";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";

const p = document.createElement("p");
p.textContent = "ME TOO!";

box.appendChild(h1);
box.appendChild(p);
container.appendChild(box);

const btn = document.querySelector("#btn");
btn.addEventListener("click", (e) => {
    alert("YAY! YOU DID IT!");
    e.target.style.background = "blue";
});