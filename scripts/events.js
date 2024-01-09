//DOM events
// 1.Event object
/*    - Event type : change,submit, load, unload,play ,open, canplay, pause,playing, progress, ended, resize,scroll, toggle etc.
      - Properties: type, target, preventDefault()

    2. MouseEvent object
    3. KeyboardEvent object
    4. FocusEvent object
    5. ClipboardEvent object
    6. DragEvent object

 */
/*
<input/> - text,number,password,email,color,radio,checkbox,search,time,date,datetime,week, month,url,tel,file
<select/> 
<textarea/>
*/

console.clear();

//OnChange event handler
const input = document.querySelector('input[name=name');
input.addEventListener('change', changeHandler);

function changeHandler(e) {
    // console.log(e.type);
    // console.log(e.target);
    // console.log(e.target.className);
    // console.log(e.target.id);
    // console.log(e.target.type);
    console.log(e.target.value);
}

//checkbox input.checked
const programs = document.querySelectorAll('input[name=program]');
// console.log(programs);
Array.from(programs).map((program) => {
    program.addEventListener('change', checkChangeHandler);
});
function checkChangeHandler(e) {
    if (e.target.checked) {
        console.log(e.target.value);
    }
}

//Select input element
const department = document.querySelector('#department');
// console.log(department);

department.addEventListener('change', optionChangeHandler);
function optionChangeHandler(e) {
    console.log(e.target.value);
}

// OnSubmit event handler
const form = document.querySelector('form');
const name = form.querySelector('div #name');
const email = form.querySelector('div #email');
const password = form.querySelector('div #password');
console.log(name, email, password);

form.addEventListener('submit', submitHandler);
function submitHandler(e) {
    e.preventDefault();
    // form value finding

    const userInfo = {
        name: name.value,
        email: email.value,
        password: password.value,
    };
    console.log(userInfo);
    name.value = '';
    email.value = '';
    password.value = '';
}

//Media related events
// play, canplay, pause,playing, progress, ended, volumechange, waiting

const video = document.querySelector('video');

video.addEventListener('canplay', function (e) {
    console.log('can play');
});
video.addEventListener('play', function (e) {
    console.log(' play');
});
video.addEventListener('pause', function (e) {
    console.log(' pause');
});
video.addEventListener('playing', function (e) {
    console.log(' playing');
});

video.addEventListener('ended', function (e) {
    console.log(' Thanks for watching');
});

video.addEventListener('volumechange', function (e) {
    console.log(' volumechange');
});

//load, unload, resize,scroll, toggle(work with details), beforeprint, afterprint event handlers
window.addEventListener('load', function () {
    console.log('loading..');
});
window.addEventListener('unload', function () {
    console.log('unloading..');
});
window.addEventListener('resize', function () {
    console.log('resizing..');
    const width = window.innerWidth;
    const height = window.innerHeight;
    console.log(height, width);
});
window.addEventListener('scroll', function () {
    console.log('scrolling..');
});

const details = document.querySelector('details');

details.addEventListener('toggle', function (e) {
    console.log(e.target.open);
    console.log('toggling..');
});
window.addEventListener('beforeprint', function () {
    console.log('beforeprinting..');
});
// window.addEventListener('afterprint', function () {
//     console.log('afterprinting..');
// });
// const afterPrint = () => {
//     window.setTimeout(() => {
//         this.location.back();
//         window.removeEventListener('afterprint', afterPrint);
//     }, 1);
// };

// window.addEventListener('afterprint', afterPrint);
// window.print();
