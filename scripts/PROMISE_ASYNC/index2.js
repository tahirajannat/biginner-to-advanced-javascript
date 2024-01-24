// //callback and higher order functions
// function square(x) {
//     console.log(`squire of ${x}: ${x * x}`);
// }
// square(5);

// const y = square;
// y(5);

// function higherOrderFunctions(num, callback) {
//     console.log('higher order functions');
//     callback(num);
// }
// higherOrderFunctions(6, square);

// const taskOne = (callback) => {
//     console.log('task 1');
//     callback();
// };

// const taskTwo = (callback) => {
//     setTimeout(() => {
//         console.log('task 2 . Data Loading');
//         callback();
//     }, 3000);
// };
// const taskThree = (callback) => {
//     console.log('task 3');
//     callback();
// };
// const taskFour = () => {
//     // callback();
//     console.log('task 4');
// };
// taskOne(() => {
//     taskTwo(() => {
//         taskThree(() => {
//             taskFour();
//         });
//     });
// });

// console.log('hi');
// document.querySelector('button').addEventListener('click', () => {
//     console.log('button is clicked');
// });
// console.log('bye');
