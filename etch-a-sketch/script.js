const container = document.querySelector(".container");
const button = document.querySelector("button");
let dimension = 16;

function createBoxes(dimension) {
    for(let i = 0; i < dimension; i++) {
        for(let j = 0; j < dimension; j++) {
            const box = document.createElement("div");
            box.classList.add("box");
            let boxDimension = 560 / dimension;
            box.style.width = `${boxDimension}px`;
            box.style.height = `${boxDimension}px`;
            box.addEventListener("mouseover", (event) => {
                box.style.backgroundColor = "black";
            })
            container.appendChild(box);
        }
    }
}

function removeBoxes() {
    let allBoxes = document.querySelectorAll(".box");
    allBoxes.forEach((box) => {
        box.remove();
    });
}

button.addEventListener("click", (event) => {
    dimension = Number(
        prompt("Enter dimension between 16 and 100: ")
    );

    if(dimension > 100 || dimension < 16) {
        alert("ERROR: invalid input");
        while(dimension > 100 || dimension < 16) {
            dimension = Number(
                prompt("Enter dimension between 16 and 100: ")
            );
        }
    }

    removeBoxes()
    createBoxes(dimension);
});

createBoxes(dimension);