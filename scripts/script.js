//All About Number
var number = 2.6545;
console.log(number.toFixed()); //return String. return total number after decimal point
console.log(number.toPrecision()); //return String and total number
console.log(Number(12.5)); //Number type
console.log(Number(false)); //Number type boolean value
console.log(typeof Number(12.5)); // Type of number

//All About Sting
//String Concatenation
var firstName = 'Tahira';
var lastName = 'Jannat';
var fullName = firstName + ' ' + lastName;

document.write('My Name is: ' + fullName + '<br />');
document.write(fullName + '  is my name <br />');
//
var num1 = 20;
var num2 = 30;
// OR
/*
var num1 = prompt('Please enter first number: ');
var num2 = prompt('Please enter second number: ');
*/

document.write('num1 is: ' + num1 + ' and num2 is: ' + num2 + '<br />');

// String Library function
var text = 'Bangladesh';
var len = text.length;
console.log(len);
document.write('Number of characters: ' + len + '<br />');

// Prompt function

// var textPrompt = prompt('Please enter your name');
// document.write('Number of characters: ' + textPrompt.length);
///

//
document.write(text.charAt(1));
document.write(text.toUpperCase(1));
document.write('<br />');

// Concatenation function
var str1 = 'Bangladesh ';
var str = str1.slice(2, 7);
document.write(str);
// var str2 = 'is a beautiful country';
// var mainStr = str1.concat(str2);
// document.write(mainStr);

///Arithmetic Operator -> +, -, *, /, %(Modulas/Remainder), **(Exponent/to the power), ++ , --
var a = 6;
console.log(a--, a++, 2 ** 8, 7 % 2);

//Assignment operator -> =, /=, +=, -=,*=, %=,**=
var x = 6; //assignment operator
x += 9; // x = x(assign value)+9
// x += y; // x = x(assign value)+y
var y = 3;
y = y %= 10;
console.log(x);
console.log(y);

// Arithmetic operator Program
/*
num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);
var sum, sub, div, multi, mod, result;

result = num1 + num2;
document.write('<br/> ' + num1 + '+' + num2 + '= ' + result + '<br/>');

result = num1 - num2;
document.write('<br/> ' + num1 + '+' + num2 + '= ' + result + '<br/>');

result = num1 / num2;
document.write('<br/> ' + num1 + '/' + num2 + '= ' + result + '<br/>');

result = num1 * num2;
document.write('<br/> ' + num1 + '*' + num2 + '= ' + result + '<br/>');

result = num1 % num2;
document.write('<br/> ' + num1 + '%' + num2 + '= ' + result + '<br/>');
*/
// Area of various shapes
/*
var base = parseFloat(prompt('Enter Base = '));
var height = parseFloat(prompt('Enter height = '));
var areaOfTriangle = 0.5 * base * height;
var areaOfRectriangle = base * height;
document.write('<br/> Area Of Triangle =  ' + areaOfTriangle);
document.write('<br/> Area Of Triangle =  ' + areaOfRectriangle);
*/

// temperature converter
// var farhren = parseFloat(prompt('Enter Temperature = '));
// var cels = parseFloat(prompt('Enter Celsius = '));
// var cels = (farhren - 32) * (5 / 9);
// var farhren = cels * (9 / 5) + 32;
// document.write('<br/> Fahrenheight = ' + farhren);

//Relational Operator -> >,<, >=, <=, ==, ===, !=( to check value), !==(to check data type)
// Logical Operator -> &&, ||, !
