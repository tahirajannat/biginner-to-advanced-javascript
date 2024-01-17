// array destructure

let numbers = [10, 20, 30, 40, 50, 60, 70, 80];
console.log(numbers[0], numbers[1], numbers[2], numbers[3]);
// let [num1, num2, num3, num4, num5, num6, num7, num8] = numbers;
let [num1, num2, num3, ...z] = numbers;
console.log(z);

// swap variables

let a = 10,
    b = 20,
    c = 30;
[a, b] = [b, a];
console.log(a);
console.log(b);

// object destructure
// nested object destructure
let students = {
    id: 101,
    name: 'Tahira Jannat',
    dept: 'CSE',
    gpa: 2.88,
    language: {
        native: 'Bangla',
        advance: 'English',
    },
};

const { id, name, dept, language } = students;
console.log(students.name);
console.log(name);
console.log(id);
console.log(dept);
console.log(language);

// destructuring function parameters

const studentInfo = ({ id, name }) => {
    console.log(`${name}, ${id}`);
};
let studentAll = {
    id: 101,
    name: 'Tahira Jannat',
    dept: 'CSE',
    gpa: 2.88,
};

studentInfo(studentAll);
