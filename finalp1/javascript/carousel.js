// images array
const images = [
    { src: 'images/carousel/image1.jpg' },
    { src: 'images/carousel/image2.jpg' },
    { src: 'images/carousel/image3.jpg' },
    { src: 'images/carousel/image4.jpg' },
    { src: 'images/carousel/image5.jpg' },
]

let currentIndex = 0
let interval

// get DOM elements
const imageElement = document.getElementById('images')
const prevButton = document.getElementById('previous')
const nextButton = document.getElementById('next')
const dotsContainer = document.getElementById('dots')

// function to create dots
const createDots = () => {
    images.forEach((_, index) => {
        const dot = document.createElement('span')
        dot.dataset.index = index // store index for click events
        dot.addEventListener('click', () => { // allows for clicking the dots to update
            currentIndex = index
            updateSlideshow(currentIndex)
            resetInterval()
        })
        dotsContainer.appendChild(dot)
    })
}

// function to update dots
const updateDots = (index) => {
    const dots = document.querySelectorAll('.dots span')
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active')
        } else {
            dot.classList.remove('active')
        }
    })
}

// update slideshow with dots
const updateSlideshow = (index) => {
    imageElement.style.opacity = '0'
    setTimeout(() => {
        imageElement.src = images[index].src
        imageElement.style.opacity = '1'
        updateDots(index) // update dots when the slide changes
    }, 200)
}

// event listeners for buttons
prevButton.addEventListener('click', () => {
    currentIndex = currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1
    updateSlideshow(currentIndex)
    resetInterval()
})

nextButton.addEventListener('click', () => {
    currentIndex = currentIndex + 1 === images.length ? 0 : currentIndex + 1
    updateSlideshow(currentIndex)
    resetInterval()
})

// automatic slideshow
function startSlideshow() {
    interval = setInterval(() => {
        currentIndex = currentIndex + 1 === images.length ? 0 : currentIndex + 1
        updateSlideshow(currentIndex)
    }, 4000) // changes every 4 seconds
}

// reset interval
function resetInterval() {
    clearInterval(interval)
    startSlideshow()
}

// initialize carousel
createDots()
updateSlideshow(currentIndex)
startSlideshow()



