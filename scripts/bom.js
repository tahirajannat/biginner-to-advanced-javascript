//BOM (Browser Object Model):
/*  
    1. window object
    2. location object
 */

console.clear();
// console.log(window);
// console.log(window.document);
// console.log(document);
// console.log(window.location);
// console.log(location);

//href
console.log(location.href);

//protocol
console.log(location.protocol);

//hostname
console.log(location.hostname);

//port
console.log(location.port);

//pathname
console.log(location.pathname);

let locationDiv = document.querySelector('.location-div');
// console.log(locationDiv);

let p1 = locationDiv.children[0];
p1.textContent = location.href;

let p2 = locationDiv.children[1];
p2.textContent = location.hostname;

let p3 = locationDiv.children[2];
p3.textContent = location.protocol;

let p4 = locationDiv.children[3];
p4.textContent = location.pathname;

let p5 = locationDiv.children[4];
p5.textContent = location.port;

///
var visitButton = document.querySelector('#visit');
visitButton.addEventListener('click', function () {
    location.assign('https://tahirajannat.com');
});

//js BOM
//popup boxes- alert, confirm, prompt
console.log(window);
// alert('Hello world!');
// confirm('Are you sure ?');
// function deletingSomething() {
//     let value = confirm('Are you sure you want to delete?');
//     if (value) {
//         console.log('dileted');
//     } else {
//         console.log('not deleted');
//     }
// }
// deletingSomething();

//prompt

// function welcome() {
//     var h1 = document.createElement('h1');
//     let text;
//     let user = prompt('Enter your name');
//     if (user == null || user == '') {
//         text = 'No name entered';
//     } else {
//         text = ' Welcome  ' + user;
//     }
//     var textNode = document.createTextNode(text);
//     h1.appendChild(textNode);
//     document.body.appendChild(h1);
// }
// welcome();

//JS BOM
//js Timing Events methods
// setTimeout(), setInterval()

setInterval(() => {
    console.log('hi');
}, 3000);
setTimeout(display, 3000);

function display() {
    console.log('display setInterval()');
}

let msg = document.querySelector('.message');

console.log(msg);
let saveBtn = document.querySelector('#save');

saveBtn.addEventListener('click', saveUser);
function saveUser() {
    msg.textContent = 'user registration successfull ';
    setTimeout(() => {
        msg.textContent = '';
    }, 2000);
}

let msgInt = document.querySelector('.messageInt');
let saveIntBtn = document.querySelector('#saveInt');
saveIntBtn.addEventListener('click', displayCount);
function displayCount() {
    let count = 0;
    msgInt.textContent = count;
    setInterval(() => {
        count++;
        msgInt.textContent = count;
    }, 2000);
}

// Create clock
let clockBody = document.querySelector('.clockBody');
let clockBtn = document.querySelector('#clock');
clockBtn.addEventListener('click', startClock);
function startClock() {
    let date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    min = formatTime(min);
    sec = formatTime(sec);
    let time = hours + ':' + min + ':' + sec;
    clockBody.textContent = time;
    setInterval(startClock, 1000);
}

function formatTime(value) {
    if (value < 10) {
        value = '0' + value;
    }
    return value;
}
