
// Old Syntax for getter and setter 
// function Student() {
//     this.title = "Mr.";
//     this.name = "Steve";
// }

// var student1 = new Student();

// Object.defineProperty(student1, 'fullName', {
//     get: function () {
//         return this.title + ' ' + this.name;
//     },
//     set: function (_fullName) {
//         this.title = _fullName.split(' ')[0];
//         this.name = _fullName.split(' ')[1];
//     }
// });

// student1.fullName = "Mr. John";

// console.log(student1.title);
// console.log(student1.name);


// Modern Syntax

// class Student {

//     constructor(title, name) {

//         this.title = "Mr.";
//         this.name = "Steve";
//     }

//     get name() {
//         return this._name
//     }

//     set name(value) {
//         this._name = value
//     }

// }
//  const student1 = new Student("Book","C");
//    student1.name = "Mr. John";


// console.log(student1.name);