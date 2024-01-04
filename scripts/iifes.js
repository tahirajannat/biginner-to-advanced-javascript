//IIFEs (Immidiately Invokeable Function Expression)
(function display(message) {
    console.log(message);
})('hello world');

//Function Expressions
var display2 = function displayMessage(msg) {
    console.log(msg);
};
display2('Hi I am Tahira');

//Parentheses:(),Curly braces{},Square brackets:[],Angle brackets<>
//Task: create an IIFEs that print sum of 2 numbers

(function sumOfNumbers(num1, num2) {
    var result = num1 + num2;
    console.log(result);
})(2, 3);
