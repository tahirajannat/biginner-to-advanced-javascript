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

console.log(window);
fetch('https://jsonplaceholder.typicode.com/posts', {
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
    .then((response) => {
        if (!response.ok) {
            const message = `Error: ${response.status}`;
            throw new Error(message);
        }
        return response.json();
    })
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
