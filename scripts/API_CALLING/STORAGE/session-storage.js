// localStorage vs sessionStorage
// 10mb va 5mb
// permannet vs session(tab)

// sessionStorage.setItem('user1', 'Tahira');
// sessionStorage.setItem('user2', 'jannat');

const userName1 = sessionStorage.getItem('user1');
const userName2 = sessionStorage.getItem('user2');
sessionStorage.removeItem('user1');
console.log(userName1, userName2);
sessionStorage.clear();

const user = { id: 1, name: 'tahira' };
sessionStorage.setItem('user', JSON.stringify(user));

// console.log(
//     sessionStorage.getItem('user', JSON.parse(localStorage.getItem('user')))
// );
