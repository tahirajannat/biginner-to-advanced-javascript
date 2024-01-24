console.clear();
console.log('API request');
//XML http request
//event -> onload(), onerror()
//property -> response, responseText, responseType, responseURL, status,statusText
//function -> open(), send(), setRequestHeader()
const makeRequest = (method, url, data) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onload = () => {
            let data = xhr.response;
            console.log(JSON.parse(data));
        };
        // console.log(xhr);
        xhr.onerror = () => {
            console.log('There is an error');
        };
        xhr.send(JSON.stringify(data));
    });
};

const getData = () => {
    makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts').then(
        (response) => {
            console.log(response);
        }
    );
};
getData();
const sendData = () => {
    makeRequest('POST', 'https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1,
    });
};
// sendData();
//
const updateData = () => {
    makeRequest('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
        id: 1,
        title: 'hello',
        body: 'bar',
        userId: 1,
    });
};
const updateSingleData = () => {
    makeRequest('PATCH', 'https://jsonplaceholder.typicode.com/posts/1', {
        title: 'this is updated title',
    });
};
const deleteData = () => {
    makeRequest('DELETE', 'https://jsonplaceholder.typicode.com/posts/1', {});
};
deleteData();
