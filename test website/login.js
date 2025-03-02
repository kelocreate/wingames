document.querySelector(".sign-form").addEventListener("submit", function(event){
    event.preventDefault();  // Prevent form submission

    var username = document.querySelector(".username").value;
    var password = document.querySelector(".password").value;

    var validUsername = "Masterid";
    var validPassword = "2025testgame";

    // Check if username and password match
    if (username === validUsername && password === validPassword) {
        // Redirect to homepage on success
        window.location.href = "index.html";
    } else {
        // Display error message on failure
        document.querySelector(".error-message").textContent = "Invalid username or password";
        document.querySelector(".error-message").style.color = "red";  // Make the error message red for visibility
    }
});
