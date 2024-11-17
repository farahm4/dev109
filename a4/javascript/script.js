function validateForm() {

    // clear all error messages
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

    // setting valid bools to false
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
    var validZipcode = true; // default to true unless country is USA

    // validate first name
    var firstname = document.getElementById("firstname").value;
    if (firstname === "" || firstname.length > 20 || !/^[a-zA-Z]+$/.test(firstname)) {
        document.getElementById("error1").innerText = "First name is required, must be less than 20 characters, and only contain letters.";
    } else {
        validFirstname = true;
    }

    // validate last name
    var lastname = document.getElementById("lastname").value;
    if (lastname === "" || lastname.length > 50 || !/^[a-zA-Z]+$/.test(lastname)) {
        document.getElementById("error2").innerText = "Last name is required, must be less than 50 characters, and only contain letters.";
    } else {
        validLastname = true;
    }

    // validate email
    var email = document.getElementById("email").value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        document.getElementById("error3").innerText = "Invalid email format.";
    } else {
        validEmail = true;
    }

    // validate phone
    var phone = document.getElementById("phone").value;
    if (isNaN(phone) || phone.length > 15 || phone === "") {
        document.getElementById("error4").innerText = "Phone number must be numerical and not exceed 15 digits.";
    } else {
        validPhone = true;
    }

    // validate username
    var username = document.getElementById("username").value;
    if (username === "" || username.length > 12) {
        document.getElementById("error5").innerText = "Username is required and must be less than 12 characters.";
    } else {
        validUsername = true;
    }

    // validate password
    var password = document.getElementById("password").value;
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,7}$/; // regex expression
    if (!passwordPattern.test(password)) {
        document.getElementById("error6").innerText = "Password must be max 7 characters, including 1 uppercase, 1 lowercase, 1 number, and 1 special character.";
    } else {
        validPassword = true;
    }

    // validate country
    var country = document.getElementById("country").value;
    if (country === "default") {
        document.getElementById("error7").innerText = "Country is required.";
    } else {
        validCountry = true;
    }

    // validate state
    var state = document.getElementById("state").value;
    if (country === "USA" && state === "default") {
        document.getElementById("error8").innerText = "State is required when country is USA.";
    } else {
        validState = true;
    }

    // validate city
    var city = document.getElementById("city").value;
    if (city === "") {
        document.getElementById("error9").innerText = "City is required.";
    } else {
        validCity = true;
    }

    // validate address
    var address = document.getElementById("address").value;
    if (address === "") {
        document.getElementById("error10").innerText = "Address is required.";
    } else {
        validAddress = true;
    }

    // validate zipcode if country is USA
    var zipcode = document.getElementById("zipcode").value;
    if (country === "USA" && (zipcode === "" || zipcode.length !== 5 || isNaN(zipcode))) {
        document.getElementById("error11").innerText = "Zipcode must be 5 digits and is required for USA.";
        validZipcode = false;
    }

    // return form validity
    return validFirstname && validLastname && validEmail && validPhone && validUsername && validPassword && validAddress && validCity && validState && validCountry && validZipcode;
}

function toggleZipcodeAsterisk() { // hides asterisk based on country
    var country = document.getElementById("country").value;
    var zipcodeAsterisk = document.getElementById("zipcodeAsterisk");

    if (country === "USA") {
        zipcodeAsterisk.style.display = "inline"; // show the asterisk
    } else {
        zipcodeAsterisk.style.display = "none"; // hide the asterisk
    }
}

function toggleStateDropdown() { // disables picking states when country isn't USA
    var country = document.getElementById("country").value;
    var stateDropdown = document.getElementById("state");
    stateDropdown.value = "default";

    if (country === "USA") {
        stateDropdown.disabled = false; // enable the state dropdown
        stateDropdown.style.backgroundColor = ""; // remove gray background
    } else {
        stateDropdown.disabled = true; // disable the State dropdown
        stateDropdown.style.backgroundColor = "#e0e0e0"; // add gray background
    }
}