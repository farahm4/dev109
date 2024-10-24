var table = prompt("Please enter a number between 1-10 to multiply", 1);          // Unit of table
var i = 1;                                                                        // Set counter to 1
var msg = '<h2>Multiplication Table</h2>';                                        // Message

while (true) {         // failsafe
    table = table.trim(); // trims space

    if (table === null || table === "") { // defaults to 1 if they enter blank or click cancel
        table = 1;
        console.log(table);

        break; // break out of loop
    }

    if (isNaN(table) || table < 0 || table > 10) { // under 0 or over 10
        table = prompt("Invalid input! Please enter a number between 1-10 to multiply");
    } else {
        break; // breaks out of loop if input is valid
    }
}



while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;