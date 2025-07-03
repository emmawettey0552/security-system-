function checkPassword() {
    const correctPassword = "secure123";
    let input = document.getElementById("password").value;
    let errorMsg = document.getElementById("error");

    if (input === correctPassword) {
        document.getElementById("lockScreen").style.display = "none"; // Hide login screen
        let mainContainer = document.getElementById("main-container");
        mainContainer.style.display = "block"; // Show system
        setTimeout(() => { 
            mainContainer.style.opacity = "1";
        }, 100);
    } else {
        errorMsg.textContent = "Incorrect password! Try again.";
    }
}
