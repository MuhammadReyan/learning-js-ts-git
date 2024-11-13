class User {

    constructor(username) {
        this.username = username;
        
    }

    hello(){
        console.log( ` Welcome ${this.username}` );
    }
}



class Teacher extends User{
     
        constructor(username, email, password) {
            super(username);
            this.username = username;
            this.email=email;
            this.password= password
        }

        addCourse(){
            
            console.log(` Course added ${this.username} sir`)
        }
     
}

const user = new Teacher("bill","email",123);

user.addCourse()