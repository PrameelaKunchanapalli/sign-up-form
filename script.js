document.addEventListener("DOMContentLoaded", function () {
    //select form element with class
    const form = document.querySelector(".signup-form");
    //selecting all input fiels with ids
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
// function to validate user input
    function validateInput() {
        let isValid = true;

        // checking for fields if empty
        if (firstName.value.trim() === "") {
            alert("First Name is required."); //if empty it shows alert msg
            isValid = false; //validation is failed
        }
        if (lastName.value.trim() === "") {
            alert("Last Name is required.");
            isValid = false;
        }
        if (email.value.trim() === "") {
            alert("Email is required.");
            isValid = false;
        }
        if (phone.value.trim() === "") {
            alert("Phone Number is required.");
            isValid = false;
        }
        if (password.value.trim() === "") {
            alert("Password is required.");
            isValid = false;
        }
        if (confirmPassword.value.trim() === "") {
            alert("Please confirm your password.");
            isValid = false;
        }

        // password to match
        if (password.value !== confirmPassword.value) {
            alert("Passwords do not match!");
            isValid = false;
        }
// return final validation status
        return isValid;
    }

    // if validation fails
    form.addEventListener("submit", function (event) {
        if (!validateInput()) {
            event.preventDefault(); // Stop form submission
        }
    });
}); 


