for (var i = 1; i <= 10; i++) {
    document.write('</br> ' + i + '. <span>Tahira</span></br>');
}
document.write('END');

//Sum
var sum = 0;
for (var i = 1; i <= 5; i++) {
    sum = sum + i;
}
document.write('</br> ' + '<span>Sum = </span>' + sum);
document.write('</br>END');

////////////////////////////////
// var sum2 = 0;
// var firstNum = parseInt(prompt('Enter first numebr : '));
// var secondNum = parseInt(prompt('Enter second numebr : '));

// for (var i = firstNum; i <= secondNum; i++) {
//     sum2 = sum2 + i;
// }
// document.write('</br> ' + '<span>Sum 2 = </span>' + sum2);
// document.write('</br>END');

////////////////////////////////
// var sum3 = 0;
// for (var i = 1; i <= 5; i++) {
//     var firstNum2 = parseInt(prompt('Enter first numebr : '));
//     var secondNum2 = parseInt(prompt('Enter second numebr : '));
//     sum3 = firstNum2 + secondNum2;
//     document.write('</br> ' + '<span>Result = </span>' + sum3);
// }
// document.write('</br>END');

////While Loop
var i = 1;
var whileSum = 0;
while (i <= 5) {
    document.write('' + i);
    whileSum += i;
    i++;
}
document.write('While Sum: ' + whileSum);

//
// var j = 1;
// var divSum = 0;
// while (j <= 100) {
//     if (j % 3 === 0) {
//         document.write('</br>  divided by 3: ' + j + '</br>');
//     } else if (j % 5 === 0) {
//         document.write('divided by 5: ' + j + '</br>');
//     }
//     if (j % 3 === 0 && j % 5 === 0) {
//         divSum = divSum + j;
//     }

//     j++;
// }
// document.write('</br>divided by 3 and 5: ' + divSum + '</br>');
