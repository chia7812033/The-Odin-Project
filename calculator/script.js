const numberButtons = document.querySelectorAll(".number")
numberButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        display(e.target.dataset.n);
    })
});

function display(n) {
    const currentDisplay = document.querySelector(".result");
    let displayContent = currentDisplay.textContent + n;
    currentDisplay.textContent = displayContent
}
