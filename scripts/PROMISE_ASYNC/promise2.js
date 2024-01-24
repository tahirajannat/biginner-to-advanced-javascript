console.log('welcome');

const taskOne = () => {
    return new Promise((resolve, reject) => {
        resolve('Task one completed successfully');
        // reject('Task one rejected successfully');
    });
};

const taskTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Task two completed successfully');
        }, 2000);
    });
};
const taskThree = () => {
    return new Promise((resolve, reject) => {
        // resolve('Task three completed successfully');
        reject('Task three rejected successfully');
    });
};

taskOne()
    .then((res) => {
        console.log(res);
    })
    .then(taskTwo)
    .then((res) => {
        console.log(res);
    })
    .then(taskThree)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
console.log('bye');
