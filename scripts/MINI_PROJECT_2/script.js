// dummy data
// const posts = [
//     {
//         title: 'this is title one',
//         body: 'this is title body one',
//     },
//     {
//         title: 'this is title two',
//         body: 'this is title body two',
//     },
//     {
//         title: 'this is title three',
//         body: 'this is title body three',
//     },
//     {
//         title: 'this is title four',
//         body: 'this is title body four',
//     },
//     {
//         title: 'this is title one',
//         body: 'this is title body one',
//     },
//     {
//         title: 'this is title two',
//         body: 'this is title body two',
//     },
//     {
//         title: 'this is title three',
//         body: 'this is title body three',
//     },
//     {
//         title: 'this is title four',
//         body: 'this is title body four',
//     },
// ];

//fetch data
const fetchData = async (config) => {
    try {
        const res = await axios(config);
        return res.data;
    } catch (error) {
        throw Error("Couldn't connect to the server");
    }
};

// fetchData();
// selection
const postContainer = document.querySelector('.posts');
const loadAllData = async () => {
    const posts = await fetchData('https://jsonplaceholder.typicode.com/posts');
    posts.map((post) => {
        console.log(post.title, post.body);
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = ` <h4 class='post-title'>${post.title}</h4>
    <p class='post-body'>${post.body}</p>`;
        postContainer.append(postElement);
    });
};
loadAllData();

let enterEventCount = 0;
let leaveEventCount = 0;
const mouseTarget = document.getElementById('mouseTarget');
const unorderedList = document.getElementById('unorderedList');

mouseTarget.addEventListener('mouseenter', (e) => {
    mouseTarget.style.border = '5px dotted orange';
    enterEventCount++;
    addListItem(`This is mouseenter event ${enterEventCount}.`);
});

mouseTarget.addEventListener('mouseleave', (e) => {
    mouseTarget.style.border = '1px solid #333';
    leaveEventCount++;
    addListItem(`This is mouseleave event ${leaveEventCount}.`);
});

function addListItem(text) {
    // Create a new text node using the supplied text
    const newTextNode = document.createTextNode(text);

    // Create a new li element
    const newListItem = document.createElement('li');

    // Add the text node to the li element
    newListItem.appendChild(newTextNode);

    // Add the newly created list item to list
    unorderedList.appendChild(newListItem);
}
////
function unhighlight(x) {
    x.style.backgroundColor = 'transparent';
}

function highlight(x) {
    x.style.backgroundColor = 'red';
}
