// Call Method

// call keyword tb use krte hain jb abh refernce hpld krke rkhyga setusername or value bh mil jaegii krwana 

function setUserName(username) {
    this.username = username
    console.log("called");
}

function createUser(username, email, password) {

    setUserName.call(this, username)
    this.email = email;
    this.password = password
}

const chai = new createUser("hello","emailing ",123);
console.log(chai)