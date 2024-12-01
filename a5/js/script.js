// images array with descriptions
const images = [
    { src: "img/image1.jpg", description: "Vibrant Neighborhood" },
    { src: "img/image2.jpg", description: "Bright Forest" },
    { src: "img/image3.jpg", description: "Autumn Weather" },
    { src: "img/image4.jpg", description: "Dark Trail" },
    { src: "img/image5.jpg", description: "Mountain at Night" },
];

let currentIndex = 0;
let interval;

// getting dom elements
const imageElement = document.getElementById("images");
const descriptionElement = document.getElementById("imageDesc");
const prevButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

// update slideshow
function updateSlideshow(index) {
    imageElement.src = images[index].src;
    imageElement.alt = images[index].description;
    descriptionElement.textContent = images[index].description;
}

// event listeners for buttons
prevButton.addEventListener("click", () => { // arrow function to contain if statement 
    if (currentIndex - 1 < 0) { 
        currentIndex = images.length - 1; // wrap around to the last image
    } else {
        currentIndex--; // move to the previous image
    }
    updateSlideshow(currentIndex);
    resetInterval();
});

nextButton.addEventListener("click", () => {
    if (currentIndex + 1 === images.length) { // if index is equal to image length, reset to 0
        currentIndex = 0;
    } else {
        currentIndex++; // move to next image
    }

    updateSlideshow(currentIndex);
    resetInterval();
});

// automatic slideshow
function startSlideshow() {
    interval = setInterval(() => { 
        if (currentIndex + 1 === images.length) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        updateSlideshow(currentIndex);
    }, 4000); // changes every 4 seconds
}

// reset the interval
function resetInterval() {
    clearInterval(interval);
    startSlideshow();
}

// start slideshow
updateSlideshow(currentIndex);
startSlideshow();
