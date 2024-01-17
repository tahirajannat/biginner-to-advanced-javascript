//find( callback,value) return the value of the first element that pass certain condition

let numbers = [15, 55, 14, 46, 57, 40];
const evenNumber = (value, index, array) => {
    if (value % 2 === 0) return value;
};
console.log(evenNumber(numbers));

let firstEvenNumber = numbers.find(evenNumber);
let firstEvenNumberInd = numbers.findIndex(evenNumber);
console.log(firstEvenNumber);
console.log(firstEvenNumberInd);

// findIndex( callback,value ) return the index of the first element that pass certain condition
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
console.log(students.find((x) => x.gpa > 3));

// startswith (searchString, position)-> check a string starts with another string

const message = 'Today is Tuesday';
console.log(message.startsWith('Today', 3));
// endswith (searchString, length) -> check a string ends with another string

console.log(message.endsWith('Tuesday'));
// includes ( searchString, position) -> check if a string contains another string
console.log(message.includes('Tuesday'));

// all these methods are case sensitive
