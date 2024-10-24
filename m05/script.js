var table = prompt("Please enter a number between 1-10 to multiply", 1);             // Unit of table
var i = 1;                                                                        // Set counter to 1
var msg = '<h2>Multiplication Table</h2>';                                        // Message

if (table === null || table === "") {                                             // failsafe
    table = 1;
    console.log(table);
} 

while (table < 0 || table > 10) {
    table = prompt("Invalid input! Please enter a number between 1-10 to multiply");
}


while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;