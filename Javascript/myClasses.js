// class User {

//     constructor(username, email, password) {
//         this.username = username;
//         this.email=email;
//         this.password= password
//     }

//     encryptPassword(){
//         return `${this.password}abcbcbc`
//     }
// }

// const user = new User("aaaa","email",123);
// console.log(user.username);
// console.log(user.encryptPassword())


// Behind the scene  yahi sb kam kese honge constructor or encryptpassword 


// function User(username, email, password){
//     this.username = username;
//              this.email=email;
//              this.password= password
// }



// User.prototype.encryptPassword = function(){
//     return this.password + "abah"
// }

// const user = new User("asda","aemail",213);
// console.log(user.encryptPassword())


// instanceof keyword se two class check krwa skte ke extends hui ya nh