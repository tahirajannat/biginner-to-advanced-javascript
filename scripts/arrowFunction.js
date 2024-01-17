function display1() {
    console.log('I am display 1');
}

const display2 = () => console.log('I am display 2'); //no need  {}  for single argument in Arrow function

display1();
display2();

function message1() {
    return 'I am message 1';
}
console.log(message1());

const message2 = () => 'I am message 2'; //no need to return here

console.log(message2());

function add(num1, num2) {
    return num1 + num2;
}
console.log(add(3, 4));

const arrowAdd = (num1, num2) => {
    return num1 + num2; // If use {} in function for single argument then you have to return
};
console.log(arrowAdd(3, 4));

// Arrow function for Filter, Map,
let students = [
    {
        id: 101,
        name: 'Tahira Jannat',
        dept: 'CSE',
        gpa: 2.88,
    },
    {
        id: 102,
        name: 'Marwarid Mitu',
        dept: 'BBA',
        gpa: 3.66,
    },
    {
        id: 103,
        name: 'NI Salman',
        dept: 'CSE',
        gpa: 3.55,
    },
];
console.log(students);
function studentsName() {
    return students
        .filter(function (student) {
            return student.gpa > 3;
        })
        .map(function (name) {
            return name.name;
        });
}
console.log(studentsName());

const studentInfo = () =>
    students.filter((student) => student.gpa > 3).map((names) => names.name);
console.log(studentInfo());

//
