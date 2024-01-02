var num1 = prompt('Enter num! : ');
var num2 = prompt('Enter num2 : ');
var num3 = prompt('Enter num3 : ');

if (num1 > num2 && num1 < num3) {
    console.log('Large Number=' + num1);
} else if (num2 > num1 && num2 < num3) {
    console.log('Large Number=' + num2);
} else {
    console.log('Large Number=' + num3);
}

//Vowel Or consonant
var letter = prompt('Enter a letter : ');
letter = letter.toLowerCase();
if (
    letter == 'a' ||
    letter == 'e' ||
    letter == 'i' ||
    letter == 'o' ||
    letter == 'u'
) {
    console.log('Vowel');
} else {
    console.log('Consonant');
}
