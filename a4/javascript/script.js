function validateForm() {

    // Clear all error messages
    document.getElementById("error1").innerText = "";
    document.getElementById("error2").innerText = "";
    document.getElementById("error3").innerText = "";
    document.getElementById("error4").innerText = "";
    document.getElementById("error5").innerText = "";
    document.getElementById("error6").innerText = "";
    document.getElementById("error7").innerText = "";
    document.getElementById("error8").innerText = "";
    document.getElementById("error9").innerText = "";
    document.getElementById("error10").innerText = "";
    document.getElementById("error11").innerText = "";

    var validFirstname = false;
    var validLastname = false;
    var validEmail = false;
    var validPhone = false;
    var validUsername = false;
    var validPassword = false;
    var validAddress = false;
    var validCity = false;
    var validState = false;
    var validCountry = false;
    var validZipcode = true; // Default to true unless country is USA

    // Validate First Name
    var firstname = document.getElementById("firstname").value;
    if (firstname === "" || firstname.length > 20 || !/^[a-zA-Z]+$/.test(firstname)) {
        document.getElementById("error1").innerText = "First name is required, must be less than 20 characters, and only contain letters.";
    } else {
        validFirstname = true;
    }

    // Validate Last Name
    var lastname = document.getElementById("lastname").value;
    if (lastname === "" || lastname.length > 50 || !/^[a-zA-Z]+$/.test(lastname)) {
        document.getElementById("error2").innerText = "Last name is required, must be less than 50 characters, and only contain letters.";
    } else {
        validLastname = true;
    }

    // Validate Email
    var email = document.getElementById("email").value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        document.getElementById("error3").innerText = "Invalid email format.";
    } else {
        validEmail = true;
    }

    // Validate Phone
    var phone = document.getElementById("phone").value;
    if (isNaN(phone) || phone.length > 15 || phone === "") {
        document.getElementById("error4").innerText = "Phone number must be numerical and not exceed 15 digits.";
    } else {
        validPhone = true;
    }

    // Validate Username
    var username = document.getElementById("username").value;
    if (username === "" || username.length > 12) {
        document.getElementById("error5").innerText = "Username is required and must be less than 12 characters.";
    } else {
        validUsername = true;
    }

    // Validate Password
    var password = document.getElementById("password").value;
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,7}$/;
    if (!passwordPattern.test(password)) {
        document.getElementById("error6").innerText = "Password must be max 7 characters, including 1 uppercase, 1 lowercase, 1 number, and 1 special character.";
    } else {
        validPassword = true;
    }

    // Validate Country
    var country = document.getElementById("country").value;
    if (country === "default") {
        document.getElementById("error7").innerText = "Country is required.";
    } else {
        validCountry = true;
    }

    // Validate State
    var state = document.getElementById("state").value;
    if (country === "USA" && state === "default") {
        document.getElementById("error8").innerText = "State is required when country is USA.";
    } else {
        validState = true;
    }

    // Validate City
    var city = document.getElementById("city").value;
    if (city === "") {
        document.getElementById("error9").innerText = "City is required.";
    } else {
        validCity = true;
    }

    // Validate Address
    var address = document.getElementById("address").value;
    if (address === "") {
        document.getElementById("error10").innerText = "Address is required.";
    } else {
        validAddress = true;
    }

    // Validate Zipcode if Country is USA
    var zipcode = document.getElementById("zipcode").value;
    if (country === "USA" && (zipcode === "" || zipcode.length !== 5 || isNaN(zipcode))) {
        document.getElementById("error11").innerText = "Zipcode must be 5 digits and is required for USA.";
        validZipcode = false;
    }

    // Return overall form validity
    return validFirstname && validLastname && validEmail && validPhone && validUsername && validPassword && validAddress && validCity && validState && validCountry && validZipcode;
}

function toggleZipcodeAsterisk() {
    var country = document.getElementById("country").value;
    var zipcodeAsterisk = document.getElementById("zipcodeAsterisk");

    if (country === "USA") {
        zipcodeAsterisk.style.display = "inline"; // Show the asterisk
    } else {
        zipcodeAsterisk.style.display = "none"; // Hide the asterisk
    }
}

function toggleStateDropdown() {
    var country = document.getElementById("country").value;
    var stateDropdown = document.getElementById("state");
    stateDropdown.value = "default";

    if (country === "USA") {
        stateDropdown.disabled = false; // Enable the State dropdown
        stateDropdown.style.backgroundColor = ""; // Remove gray background
    } else {
        stateDropdown.disabled = true; // Disable the State dropdown
        stateDropdown.style.backgroundColor = "#e0e0e0"; // Add gray background
    }
}