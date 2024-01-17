class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    set studentName(name) {
        this.name = name;
    }
    get studentInfo() {
        return this.id + ' ' + this.name;
    }
}

let s1 = new Student(101, 'Tahira');
console.log(s1);

s1.studentName = ' Salman';
console.log(s1.name);
console.log('student info: ', s1.studentInfo);
