//============== New Keyword

// Every is object in javascript  
// Array  > Object > null
            //  ^            
//          String  
// Array kia hai object acha object kha jakr end hota hai null


// Example ye hai to function but hmne isko ak object ki trah use dekho kese function name ke sth . krke koi name se variable lelia jese ke object me properties lete hain wesi bs value assign ki or get krli function bh object ki trah use hogya
// function multipleBy5(num){
// return num*5;
// }
// multipleBy5.power = 2   
// console.log(multipleBy5(5));
// console.log(multipleBy5.power)
// console.log(multipleBy5.prototype)


function createUser(username,price){
    this.username =username;
    this.price =price;
}

createUser.prototype.increment =function(){
    this.price++;
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.price}`)
}

// javascript classes ke through constuctor function nh deti balke new keyword ke zarye deti hai 
// constuctur ke under prototype linked hota hai

const user = new createUser("bill",223);

user.increment();
user.printMe();