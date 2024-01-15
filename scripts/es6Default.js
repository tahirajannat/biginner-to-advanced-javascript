/**
 * ES6 features
 *   1. ES6 syntax
 *     1.1. ES6 Variables -> let, const (scope, redeclaration, value assigning)
 *     1.2. Template Literals,
 *     1.3. Hoisting and strict mode
 *     1.4. Default and Rest parameter
 *     1.5. spread operator
 *     1.6. for...of and for...in
 *
 *  2. Arrow functions
 *  3. Destructuring
 *     3.1. Array and Object Destructuring
 *  .
 *  .
 *  .
 *
 */

console.clear();
('use strict');

//default parameter
function message(message = 'This is default parameter') {
    console.log(`${message}`);
}
message();

//rest parameter (it is pack the array and create new array (x,y, ...z))

function sum(x, y, ...z) {
    console.log(`x=${x}, y=${y}, z=${z}`);
    let addition = x + y + z.reduce((acc, val) => acc + val, 0);
    console.log(`addition = ${addition}`);
}

sum(20, 30, 40, 50, 60);

//spread operator

function addNumbers(x, y, z) {
    return x + y + z;
}
let numbers = [1, 2, 3];
// ...numbers this is uppacking the array

console.log(addNumbers(...numbers));

let numbers1 = [5, 6, ...numbers, 8];
console.log('numbers1', numbers1);

let numbers2 = [4, 5, 6];
// let numbers3 = numbers1.concat(numbers2); //we can use ...numbers here
let numbers3 = [...numbers1, ...numbers2];
console.log('numbers3', numbers3);

////

let p1 = {
    name: 'Tahira Jannat',
    age: 28,
};
let p2 = {
    nationality: 'Bangladeshi',
    occupation: 'Frontend Developer',
};

let p = { ...p1, ...p2 };
console.log(p);

//object literals
function studentInfo(name, age) {
    return {
        // name: name,
        // age: age,
        name, //updated ES6 format
        age,
    };
}

console.log(studentInfo('tahira', 28));

let messageNew = {
    // body: function () {
    //     return `Hi I am object function`;
    // },
    //ES6 consize syntax
    body() {
        return `Hi I am object function`;
    },
    'body name'() {
        return `Hi I am object function with space`;
    },
};
console.log(messageNew.body());
console.log(messageNew['body name']());

//1.6. for...of and for...in

const names = ['s1', 's2', 's3'];
for (let name of names) {
    console.log(name);
}
let students = {
    id: 101,
    name: 'Tahira Jannat',
    dept: 'CSE',
};

for (let x in students) {
    console.log(`${x} : ${students[x]}`);
}

// for vs foreach

let number = [10, 20, 30, 40, 50];
for (let x = 0; x < number.length; x++) {
    console.log(number[x]);
} //Regular loop

//forEach loop
number.forEach(myFunction);
function myFunction(x) {
    console.log('first', x);
}
//OR

number.forEach(function (x) {
    console.log('second', x);
});

//
let squireNumbers = [];
number.forEach(function (x) {
    squireNumbers.push(x * x);
    console.log('squire numbers', squireNumbers);
});

//
number.forEach(function (x, ind, arr) {
    arr[ind] = x + 5;
    // console.log('new numbers', arr);
});
console.log('new numbers', number);

/// map
let mapNumbers = [2, 3, 4, 5];
let mapSquireNumbers = mapNumbers.map(function (x) {
    return x * x;
});
console.log('map squire numbers', mapSquireNumbers);

// filter
let filterNumbers = [20, 30, 40, 5, 6, 3, 50, 80, 90, 0];
let filternewNumbers = filterNumbers.filter(function (x) {
    return x > 10;
});
console.log('number filter', filternewNumbers);
