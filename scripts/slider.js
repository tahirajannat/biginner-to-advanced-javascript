var photos = [
    '/assets/1.png',
    '/assets/2.png',
    '/assets/3.png',
    '/assets/4.png',
];
console.log('photos', photos);

var img = document.querySelector('img');
var count = 0;

function next() {
    count++;

    if (count >= photos.length) {
        count = 0;
        img.src = photos[count];
    } else {
        img.src = photos[count];
    }
}
function prev() {
    count--;
    if (count < 0) {
        count = photos.length - 1;
        img.src = photos[count];
    }
    img.src = photos[count];
}

/////Style Change
var para = document.querySelector('#para');
function add() {
    // para.style.color = '#f00';
    // para.style.fontStyle = 'italic';
    // para.style.fontSize = '42px';
    para.classList.add('para-style');
}
function remove() {
    para.classList.remove('para-style');
}
