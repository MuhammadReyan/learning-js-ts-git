


class User {

    constructor(username) {
        this.username = username;
        
    }

    //  ab ye function koi use nh krta skte print bh nh hoga 
   static createId(){
        return 222;
    }
}



const user = new User("bill");
user.hello()

// done ab ye error dega agr ap call kroge to