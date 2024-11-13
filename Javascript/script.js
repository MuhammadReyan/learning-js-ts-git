// class Person{

//     Person(){
//         this.first_name= "hello";

//     }
//     getPerson(val){
//     this.name = val
//     return this.name
//     }
// }

// let   person1 = new Person();
// person1.first_name = "bill";
// person1.getPerson("gates")
// console.log(person1.first_name)      
// console.log(person1.name)      


class Student {
    // Object as a property of the class
    person = {
        firstName: 'Steve',
        lastName: 'Jobs'
    };
  
    // Constructor function
    constructor() {
        this.name = "John";
        this.gender = "Male";
    }
  
    // Method to say Hi
    sayHi() {
        console.log('Hi');
    }
}

const student1 = new Student();
console.log(student1.name);        // Output: John
console.log(student1.gender);      // Output: Male
student1.sayHi();                  // Output: Hi
