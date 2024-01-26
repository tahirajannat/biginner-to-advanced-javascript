/**
 * 4 ways to call api -XMLHttpRequest, fetch, axios, jquery
 *
 *  fetch() has replaced XMLHttpRequest
 *  fetch - global method for making HTTP Request
 *  2 ways to call - then, async await
 *
 *  fetch is easy to use, comparing to XMLHttpRequest
 *  fetch() returns a promise
 * -returned promise can only handle network error
 * -does not support all the older browsers
 */

console.clear();

// console.log(window);
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => {
//         if (!response.ok) {
//             const message = `Error: ${response.status}`;
//             throw new Error(message);
//         }
//         return response.json();
//     })
//     .then((json) => console.log(json))
//     .catch((err) => console.log(err));

const makeRequest = async (url, config) => {
    const res = await fetch(url, config);
    if (!res.ok) {
        const message = `Error: ${res.status}`;
        throw new Error(message);
    }
    const data = await res.json();
    return data;
};
const getData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts').then((res) =>
        console.log(res)
    );
};
getData();
const sendData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
};
sendData();
const updateData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            title: 'foo00t usiahjdbs',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
};
updateData();
const updateSingleData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
            title: 'fooioeuwpf',
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
};
updateSingleData();
const deleteData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
    })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
};
deleteData();
