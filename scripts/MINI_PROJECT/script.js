let slideshowElements = document.querySelectorAll('.slideshow-element');
console.log(slideshowElements);

let counter = 1;
setInterval(() => {
    counter++;
    let currentElement = document.querySelector('.current');
    currentElement.classList.remove('current');
    if (counter > slideshowElements.length) {
        slideshowElements[0].classList.add('current');
        counter = 1;
    } else {
        currentElement.nextElementSibling.classList.add('current');
    }
    console.log(counter);
}, 3000);
