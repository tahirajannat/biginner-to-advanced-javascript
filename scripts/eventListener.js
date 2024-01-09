///Event Listener
document.querySelector('button').addEventListener('click', clickListener);

function clickListener() {
    alert('hello world');
}

var myH1 = document.querySelector('h1');

myH1.addEventListener('mouseover', function () {
    myH1.classList.add('mouse-over');
});
myH1.addEventListener('mouseout', function () {
    myH1.classList.remove('mouse-over');
});

// multiple button event listener
var myButton = document
    .querySelectorAll('.btn-1')[0]
    .addEventListener('click', function () {
        var text = this.innerHTML;
        document.querySelector('h2').innerHTML = text + '' + ' Button Clicked';
    });
var myButton = document
    .querySelectorAll('.btn-1')[1]
    .addEventListener('click', function () {
        var text = this.innerHTML;
        document.querySelector('h2').innerHTML = text + '' + ' Button Clicked';
    });
var myButton = document
    .querySelectorAll('.btn-1')[2]
    .addEventListener('click', function () {
        var text = this.innerHTML;
        document.querySelector('h2').innerHTML = text + '' + ' Clicked';
    });

//what if we have 100 button
var len = document.querySelectorAll('.btn').length;

for (var i = 0; i < len; i++) {
    var myButton = document
        .querySelectorAll('.btn')
        [i].addEventListener('click', function () {
            var text = this.innerHTML;
            document.querySelector('h3').innerHTML = text + '' + ' Clicked';
        });
}

//how to play audio in javascript
for (var i = 0; i < 3; i++) {
    var myButton = document
        .querySelectorAll('.audio-button')
        [i].addEventListener('click', function () {
            var text = this.innerHTML;
            var newText = this.className;
            audioPlay(text);
            // playAnim(newText);
        });
    var buttonClass = ['a', 'b', 'c'][i];
    document.querySelector('.audio-button.' + buttonClass).addEventListener(
        'click',
        (function (classValue) {
            return function () {
                playAnim(classValue);
            };
        })(buttonClass)
    );
}
//Kyepress listener
document.addEventListener('keypress', function (event) {
    var keyText = event.key;
    audioPlay(keyText);
    playAnim(keyText);
});

function audioPlay(text) {
    switch (text) {
        case 'Button a':
            var audio = new Audio('/sounds/a.mp3');
            audio.play();
            console.log('text');
            break;
        case 'Button b':
            var audio = new Audio('/sounds/b.mp3');
            audio.play();
            console.log('text');
            break;
        case 'Button c':
            var audio = new Audio('/sounds/a.mp3');
            audio.play();
            console.log('text');
            break;
        default:
            break;
    }
}

function playAnim(text) {
    var selectedBtn = document.querySelector('.audio-button.' + text);
    selectedBtn.classList.add('anim');
    setTimeout(function () {
        selectedBtn.classList.remove('anim');
    }, 1000);
}

///key press simple example

document.addEventListener('keypress', function (event) {
    var text = event.key;
    document.querySelector('p').innerHTML = 'You have pressed ' + text;
});
var count = 0;
document
    .querySelector('textarea')
    .addEventListener('keypress', function (event) {
        count++;
        var text = event.key;
        document.querySelector('h4').innerHTML = 'You have pressed ' + count;
    });
