//synchronous programming
// console.log('task 1');
// console.log('task 2');
// console.log('task 3');
// console.log('task 4');
// console.log('task 5');
const task1 = () => {
    console.log('task 1');
};
const dataLoading = () => {
    console.log('task 2 . Data Loading');
};
const task2 = () => {
    setTimeout(dataLoading, 1000);
};
const task3 = () => {
    console.log('task 3');
};
const task4 = () => {
    console.log('task 4');
};
task1();
task2();
task3();
task4();

//Asynchronous programming
