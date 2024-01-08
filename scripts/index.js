//DOM manipulation
// var myHeading = document.getElementsByTagName('h1')[0];
// myHeading.innerHTML = 'Hello';

// var myHeada = document.getElementsByClassName('heada');
// myHeada[1].innerHTML = 'heda';

document.querySelector('li a').innerHTML = 'text changed';
document.querySelector('.my-div a').innerHTML = 'New Text';
document.querySelectorAll('a')[0].innerHTML = 'New Text Home';

var headding2 = document.getElementsByTagName('h2');
var para = document.querySelector('p');

function btnClick() {
    // alert('Hello btn click 1');
    para.innerHTML = 'Button 1 Clicked';
}
function btnClick2() {
    para.innerHTML = 'Button 2 Clicked';
}
headding2[0].style.color = '#f00';
headding2[1].style.color = 'blue';

// Creating html elements

var headding3 = document.createElement('h3');
var text = document.createTextNode('This is a H3 Tag');
headding3.appendChild(text);
var div3 = document.getElementById('div3');
div3.appendChild(headding3);
div3.removeChild(headding2[1]);
