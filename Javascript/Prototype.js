// Real Prototype Example

const myheros = ["thor", "spiderman"];
const heroPower = {
    thor: "hammmar",
    spiderman: "sling",
    getSpiderPower: function () {
        console.log("Spidy Power is : " + this.spiderman)
    }

}
// Yaha pr hmne object me prototype ke under ak method bna kr rhk dia ab array ho ya function string object hm sb me ye method use krskte object like parent
// but agr array me prototype ke under method bnae to wo srf array me hi use hoga object function me nh milega 

// Array  > Object > null
//  ^            
//          String 

Object.prototype.meraMethod = function () {
    console.log("Mera Method present in all objects array function string etc");
}

// myheros.meraMethod() avaible 
// heroPower.meraMethod(); avaible output


//==================== Inheritance ========================//


const User = {
    name: "chai",
    email: "chai@google.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvaible: false
}
const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User
// -- modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)



// console.log(TeachingSupport.makeVideo)
// console.log(Teacher.name)









const name = "prhoo         ";

String.prototype.trueLength = function () {
    console.log("True length is : " + this.trim().length)
}

name.trueLength();