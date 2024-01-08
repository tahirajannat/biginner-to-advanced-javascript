//How to create object
//How to print object value
//Adding a constructor
//adding funtion inside constructor

//student details
// var name = 'Tahira Jannat';
// var age = 28;
// var cgpa = 3.0;
// var lang = ['Bangla', 'English', 'Hindi', 'Deutsch'];

//constructor
function Student(name, age, cgpa, lang) {
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;

    //function
    this.display = function () {
        console.log(this.lang);
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
    };
}
var student1 = new Student('Tahira Jannat', 28, 3.0, [
    'Bangla',
    'English',
    'Hindi',
    'Deutsch',
]);
var student2 = new Student('Marwarid Mitu', 24, 3.6, [
    'Bangla',
    'English',
    'Hindi',
]);

student1.display();
student2.display();
// var student1 = {
//     name: 'Tahira Jannat',
//     age: 28,
//     cgpa: 3.0,
//     lang: ['Bangla', 'English', 'Hindi', 'Deutsch'],
// };
// var student2 = {
//     name: 'Tahira Jannat',
//     age: 28,
//     cgpa: 3.0,
//     lang: ['Bangla', 'English', 'Hindi', 'Deutsch'],
// };
// var student3 = {
//     name: 'Tahira Jannat',
//     age: 28,
//     cgpa: 3.0,
//     lang: ['Bangla', 'English', 'Hindi', 'Deutsch'],
// };
