/**
 *
 * Web storage API - allows us to store & read data in browser
 * Web storage API - localStorage and sessionStorage
 * localStorage - store, read, update and remove data
 * no expiry date: data never gets lost even if you close to the browser
 *localStorage - store store data as key value pair
 * setItem(key, value)
 */

// console.clear();
localStorage.setItem('userName', 'Tahira Jannat');
localStorage.setItem('password', '123');

//getItem(key)
const userName = localStorage.getItem('userName');
const password = localStorage.getItem('password');
console.log(userName);
console.log(password);
localStorage.setItem('userName', ' setu');
localStorage.setItem('password', '123456');
// const userName = localStorage.getItem('userName');
// const password = localStorage.getItem('password');
console.log(userName);
console.log(password);

removeItem(key);
localStorage.removeItem('userName');
console.log(userName);
// console.log(password);
const countries = ['Australia', 'Canada', 'France', 'Bangladesh'];
localStorage.setItem('countries', JSON.stringify(countries));
localStorage.setItem('password', '123456');
const country = JSON.parse(localStorage.getItem('countries'));
console.log(country);
localStorage.clear();

// localStorage vs sessionStorage
// 10mb va 5mb
// permannet vs session(tab)
