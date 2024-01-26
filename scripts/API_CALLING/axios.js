/***
 *
 * very easy to use
 * it supports all modern barowsers including IE
 * it returns promise
 * throws error brilliantly
 *  no need to set header cause axios is intilligent
 *
 */
/***
 * axios(config)
 * axios (url,[config])
 * axios.get(url,[config])
 * axios.post(url,[config])
 * axios.put(url,[config])
 * axios.patch(url,[config])
 * axios.delete(url,[config])
 */
// axios returns response object- data , status ,statusText, headers,config

console.clear();
// console.log(window);
// axios
//     .get('https://jsonplaceholder.typicode.com/posts')
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));
// axios
//     .post('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//             id: 1,
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//         }),
//     })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));
// axios
//     .put('https://jsonplaceholder.typicode.com/posts/1', {
//         method: 'PUT',
//         body: JSON.stringify({
//             id: 1,
//             title: 'foogfhjkl',
//             body: 'bar',
//             userId: 1,
//         }),
//     })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));
// axios
//     .patch('https://jsonplaceholder.typicode.com/posts/1', {
//         method: 'PATCH',
//         body: JSON.stringify({
//             body: 'bardfghkbj bdfgh',
//         }),
//     })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));
// axios
//     .delete('https://jsonplaceholder.typicode.com/posts/1', {
//         method: 'DELETE',
//     })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));
// function

const makeRequest = (config) => {
    return axios(config);
};
const getData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts')
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
};
getData();
