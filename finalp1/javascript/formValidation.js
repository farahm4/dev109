function validateForm() {
    // clear all error messages
    document.getElementById("error1").innerText = "";
    document.getElementById("error2").innerText = "";

    // setting valid booleans to false
    var validName = false;
    var validEmail = false;

    // validate name
    var name = document.getElementById("name").value;
    if (name === "" || name.length > 40 || !/^[a-zA-Z]+\s[a-zA-Z]+$/.test(name)) {
        document.getElementById("error1").innerText = "Please enter your first and last name, separated by a space. Only letters are allowed.";
    } else {
        validName = true;
    }

    // validate email
    var email = document.getElementById("email").value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        document.getElementById("error2").innerText = "Invalid email format.";
    } else {
        validEmail = true;
    }

    // return form validity
    return validName && validEmail;
}


