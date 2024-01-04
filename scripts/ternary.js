var number = 6; //Number(prompt('Enter a number'));

//Normal if else condition
if (number > 0) {
    console.log('number is possitive');
} else if (number < 0) {
    console.log('number is Negative');
} else {
    console.log('zero');
}

////ternary operator
// var result = number > 0 ? 'possitive' : 'negative';
var result2 = number > 0 ? 'Possitive' : number < 0 ? 'Negative' : 'Zero';
// console.log(result);
console.log(result2);
