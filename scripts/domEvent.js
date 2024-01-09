//MouseEvent object - <html>,<head>, <meta>, <title>, <br>,<style>, <script>,<iframe>,<param>,<base>, <bdo>
/*
1. onclick
2. ondblclick
3. onmousedown
4. onmouseup
5. onmousemove
6. onmouseleave
7. onmouseover
8. onmouseenter 
*/
console.clear();
const div = document.querySelector('div');
console.log(div);
div.addEventListener('click', function (e) {
    // console.log('clicked');
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.innerHTML);
    console.log(e.target.innerText);
    console.log(e.target.textContent);
});
div.addEventListener('dblclick', function () {
    console.log('dblclick occured ');
});

div.addEventListener('mousedown', function () {
    console.log('onmousedown occured ');
});
div.addEventListener('mouseup', function () {
    console.log('mouseup occured ');
});

div.addEventListener('mouseenter', function () {
    console.log('mouseenter occured ');
});
div.addEventListener('mouseleave', function () {
    console.log('mouseleave occured ');
});

div.addEventListener('mouseover', function () {
    console.log('mouseover occured ');
});
div.addEventListener('mousemove', function (e) {
    // console.log('mousemove occured ');
    console.log('clientX: ' + e.clientX);
    console.log('clientY: ' + e.clientY);
    console.log('offsetX: ' + e.offsetX);
    console.log('offsetY: ' + e.offsetY);
});

////
const buttons = document.querySelectorAll('.btn');
// console.log(buttons);
Array.from(buttons).map((btn) => {
    btn.addEventListener('click', function (e) {
        console.log(e.target.innerText);
    });
});

//KeyboardEvent Object
/* 
1. Keydown - pressing a key, can repeat 
2. KeyPress (may not supported by some browsers)
3. Keyup
//some properties - key, keyCode, code, shiftKey, altKey, repeat
*/
const textarea = document.querySelector('textarea');
textarea.addEventListener('keydown', function (e) {
    console.log('keydown');
    if (e.repeat) {
        alert('do not repeat');
    }
});
textarea.addEventListener('keypress', function () {
    console.log('keypress');
});
textarea.addEventListener('keyup', function (e) {
    console.log('keyup: ' + e.key);
    console.log('keyup: ' + e.keyCode);
    console.log('keyup: ' + e.code);
    console.log('keyup: ' + e.shiftKey);
    if (e.shiftKey) {
        console.log('shift + ' + e.key);
    }
});

//Focus Object Events
/*
<br>, <head>, <title>, <html>,<iframe>, <meta>, <param>, <script>, <style>, <base>, <bdo>

1. onblur
2. onfocus
3. onfocusin
4. onfocusout
*/

const focusDiv = document.querySelector('input');
focusDiv.addEventListener('blur', function (e) {
    console.log('blur');
    focusDiv.style.backgroundColor = 'transparent';
    focusDiv.style.padding = '0';
    // console.log(e.target.value);
    focusDiv.value = e.target.value.toUpperCase();
});
focusDiv.addEventListener('focus', function () {
    console.log('focus');
    focusDiv.style.backgroundColor = 'tomato';
    focusDiv.style.padding = '2rem';
});
focusDiv.addEventListener('focusin', function () {
    console.log('focusin occured');
});
focusDiv.addEventListener('focusout', function () {
    console.log('focusout');
    // e.target.value.style.font
});

//ClipboardEvent Object Events
/*
1. oncopy
2. oncut
3. onpaste
*/
const para = document.querySelector('.para');

focusDiv.addEventListener('copy', function () {
    console.log('copied');
    para.innerHTML = 'You have copied';
});
focusDiv.addEventListener('cut', function () {
    console.log('cut');
    para.innerHTML = 'You have cut';
});
focusDiv.addEventListener('paste', function () {
    console.log('pasted');
    para.innerHTML = 'You have pasted';
});

//DragEvent Object Events
/*
1. ondrag
2. ondragend
3. ondragenter
4. ondragleave
5. ondragover
6. ondragstart
7. ondrop
*/

const dragEl = document.querySelector('h2');
const dragDiv = document.querySelector('.dragDrop');

dragEl.addEventListener('dragstart', (e) => {
    console.log('drag started');
    e.dataTransfer.setData('Text', e.target.id);
});

dragDiv.addEventListener('dragover', (e) => {
    e.preventDefault();
    console.log('ondragover');
});

dragDiv.addEventListener('drop', (e) => {
    console.log('drop');
    let id = e.dataTransfer.getData('Text');
    console.log('id: ', id);
    dragDiv.appendChild(document.getElementById(id));
    e.preventDefault();
});

// dragEl.addEventListener('dragleave', (e) => {
//     console.log('ondragleave');
//     e.dataTransfer.setData('Text', e.target.id);
// });
// dragEl.addEventListener('dragenter', (e) => {
//     console.log('ondragenter');
//     e.dataTransfer.setData('Text', e.target.id);
// });
// dragEl.addEventListener('dragend', (e) => {
//     console.log('ondragend');
//     e.dataTransfer.setData('Text', e.target.id);
// });
// dragEl.addEventListener('drag', (e) => {
//     console.log('ondrag');
//     e.dataTransfer.setData('Text', e.target.id);
// });
