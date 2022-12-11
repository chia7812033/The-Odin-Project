function addDiv(n) {
    container = document.querySelector(".grid");
    for (let i = 0; i < n; i++) {
        const row = document.createElement('div');
        row.classList.add("row");
        for (let j = 0; j < n; j++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("box");
            row.appendChild(newDiv);
        }
        container.appendChild(row);
    }
}

function addEffect() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = "white";
        })
    })
}

const ask = document.addEventListener('click', () => {
    const n = prompt("The number of squares per side for the new grid");
    if (n >= 100) {
        alert("Number should lower than 100");
    } else {
        document.querySelector(".grid").innerHTML = "";
        addDiv(n);
        addEffect();
    }
})

addDiv(16);
addEffect()