/**
 *
 * 4 ways to call api - XMLHttpRequest, fetch, axios, jquery
 * add jquery cdn
 * ajax - asynchronous javascript and xml
 *
 */
console.clear();
console.log(window);

const makeRequest = async (url, method, data) => {
    try {
        const result = await $.ajax({ url: url, method: method, data: data });
        return result;
    } catch (err) {
        console.log(err);
    }
};

const getData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', 'GET')
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        });
};
getData();
const sendData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts', 'POST', {
        title: 'foo',
        body: 'bar',
        userId: 1,
    }).then((response) => {
        console.log(response);
    });
};
sendData();

const updateData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', 'PUT', {
        id: 1,
        title: 'foo uhjsdbc cjhbsd',
        body: 'bar',
        userId: 1,
    }).then((response) => {
        console.log(response);
    });
};
updateData();

const updateSingleData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/2', 'PATCH', {
        title: 'foo uhjsdbc cjhbsd fdkjvcbnm hjgvbfdsijkv iukhjvnsd',
    }).then((response) => {
        console.log(response);
    });
};
updateSingleData();
const deleteData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/2', 'DELETE').then(
        (response) => {
            console.log(response);
        }
    );
};
deleteData();
