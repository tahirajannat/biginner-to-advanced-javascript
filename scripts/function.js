////Creating a functional function
function square() {
    var num = 5;
    var result = num * num;
    document.write('result: ' + result + '</br>');
}
//calling function
square();

// adding paramitter in function

function squareParam(num, num2) {
    var result = num * num2;
    document.write('result: ' + result + '</br>');
    return result;
}
//calling function
squareParam(8, 3);
document.write(squareParam(3, 5));
document.write('</br>');

//add function

function addFunction(num, num2) {
    var result = num + num;
    document.write('Sum = ' + result + '</br>');
}
function subFunction(num, num2) {
    var result = num - num;
    document.write('Sum = ' + result + '</br>');
}
function divFunction(num, num2) {
    var result = num / num;
    document.write('Sum = ' + result + '</br>');
}

//calling function
addFunction(1, 1);
subFunction(1, 2);
squareParam(8, 3);
divFunction(1, 2);
