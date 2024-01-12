const canva = document.querySelector('#myCanvas');
var canvaTxt = canva.getContext('2d');

canvaTxt.strokeStyle = 'black';
canvaTxt.strokeRect(10, 10, 382, 282);

canvaTxt.lineWidth = 3;
canvaTxt.fillStyle = 'green';
canvaTxt.fillRect(12, 12, 378, 278);

var centerX = canva.width / 2;
var centerY = canva.height / 2;

canvaTxt.beginPath();
canvaTxt.arc(centerX, centerY, 80, 0, 2 * Math.PI, false);
canvaTxt.fillStyle = 'red';
canvaTxt.fill();
canvaTxt.stroke();
//

const canvas = document.querySelector('#myCanvas2');
const ctx = canvas.getContext('2d');
const img = document.querySelector('#scream');
ctx.drawImage(img, 10, 10);

///
const canvas2 = document.querySelector('#myCanvas3');
const ctx2 = canvas2.getContext('2d');
ctx2.beginPath();
ctx2.arc(100, 50, 50, 0, Math.PI);
ctx2.stroke();
