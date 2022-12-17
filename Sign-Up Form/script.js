const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
confirmPassword.addEventListener('input', () => {
    console.log(password.value)
    console.log(confirmPassword.value)
    if (password.value != confirmPassword.value) {
        document.querySelector(".error").textContent = "* Password do not match";
        password.style.borderColor = "red";
        confirmPassword.style.borderColor = "red"
    }
    else {
        document.querySelector(".error").textContent = "";
        password.style.borderColor = "black";
        confirmPassword.style.borderColor = "black"
    }
})
