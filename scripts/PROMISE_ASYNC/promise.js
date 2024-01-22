console.log('welcome');

//how to creare promise

const promise1 = new Promise((resolve, reject) => {
    let completedPromise = true;
    if (completedPromise) {
        resolve('completed promise 1');
    } else {
        reject('rejected promise');
    }
});
promise1.then((res) => {
    console.log(res);
});

console.log('end');
