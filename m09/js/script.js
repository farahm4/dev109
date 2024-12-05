let currentDotSize = 8; // default dot size
const mybutton = document.querySelector(".button");
const colorPicker = document.getElementById("color");
const dotSize = document.getElementById("dotSize");

mybutton.addEventListener("click", (event) => { // arrow function to stop propagation
    event.stopPropagation(); 
    clearCanvas();
});

document.addEventListener("click", createDot);
document.addEventListener("wheel", adjustDotSize, { passive: false }); // wheel even is passive, causing browser to ignore preventDefault();

colorPicker.addEventListener("click", (event) => { // arrow function to stop propagation
    event.stopPropagation();
});

function createDot(event) {
    const dot = document.createElement("dot");
    dot.className = "dot";

    // set dot color from user input
    const color = colorPicker.value;
    dot.style.backgroundColor = color;
    
    // set dot size
    dot.style.width = currentDotSize + "px";
    dot.style.height = currentDotSize + "px";

    // add dot and center it
    dot.style.left = (event.pageX - currentDotSize/2) + "px";
    dot.style.top = (event.pageY - currentDotSize/2) + "px";
    document.body.appendChild(dot);
}

function clearCanvas() {
    const dot = document.getElementsByClassName("dot")

    while (dot.length > 0) { // removes dots
        dot[0].parentNode.removeChild(dot[0]);
    }
}

function adjustDotSize(event) {
    // adjust size based on scroll direction
    if (event.deltaY < 0) {
        currentDotSize = Math.min(currentDotSize + 2, 50); // max size 50px
    } else {
        currentDotSize = Math.max(currentDotSize - 2, 4); // min size 4px
    }

    dotSize.textContent = currentDotSize + "px";
    
    // prevent the default page scroll behavior
    event.preventDefault();
}