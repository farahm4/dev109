function drawRhombus() {
    const height = document.getElementById("rhombusHeight").value;
    const oddColor = document.getElementById("colorOdd").value;
    const evenColor = document.getElementById("colorEven").value;
    const symbol = document.getElementById("symbol").value;
    const output = document.getElementById("rhombusOutput");

    output.innerHTML = ""; 

    drawTopSection(output, height, oddColor, evenColor, symbol);
    drawBottomSection(output, height, oddColor, evenColor, symbol);
}

function drawTopSection(output, height, oddColor, evenColor, symbol) { // function to draw top section
    for (let i = 1; i <= height; i++) { // first for loop to control amount of rows
        let line = ""; // clears line from previous output
        
        for (let j = 0; j < height - i; j++) { // adds spaces for alignment
            line += "&nbsp;&nbsp;";
        }
        

        for (let k = 0; k < i * 2 - 1; k++) { // controls symbols
            line += `<span style="color: ${k % 2 === 0 ? oddColor : evenColor}">${symbol}</span>`; // uses terniary operator [?] to embed an if/else statement in the template literal
        }
        
        output.innerHTML += line + "<br>"; // adds output to the line and adds a line break
    }
}

function drawBottomSection(output, height, oddColor, evenColor, symbol) {
    for (let i = height - 1; i >= 1; i--) { // same as the other forloop, but counts down
        let line = "";

        for (let j = 0; j < height - i; j++) { // all other loops are the exact same
            line += "&nbsp;&nbsp;";
        }
        

        for (let k = 0; k < i * 2 - 1; k++) {
            line += `<span style="color: ${k % 2 === 0 ? oddColor : evenColor}">${symbol}</span>`;
        }
        
        output.innerHTML += line + "<br>";
    }
}
