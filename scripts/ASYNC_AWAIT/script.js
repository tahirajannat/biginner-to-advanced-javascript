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

// Async await make promise async easy to use

const callAllTask = async () => {
    try {
        const t1 = await taskOne();
        console.log(t1);
        const t2 = await taskTwo(t1);
        console.log(t2);
        const t3 = await taskThree(t2);
        console.log(t3);
    } catch (e) {
        console.log(e);
    }
};

callAllTask();
console.log('bye');
