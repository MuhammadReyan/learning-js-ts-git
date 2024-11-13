// === Interfaces =======
// interface apko class and object ka shape bna kr deta hai
// interface User{
//     name:string,
//     username:string,
//     age:number,
//     email:string,                           Hmne ye shape bna dia apne user ka
//     password:string
// }

// function getUser(user:User){
//     user.name ="name"
// }

//  type me = use hota hai or interface me direct object bnate dhk lo kese
//type a = string; // type

// interface Food {
//     name: string,
//     price: number
// }
// interface fastfood extends Food {
//     burger: string
// }



// function getFood(f: fastfood) {
//     f.name = "biryani"
//     f.burger = "checkin"
// }


// Classes  
// a template for creating objects

// type Data = string | null;

// class drive {
//     company = "hp"
//     price = 200
//     data: string | null = null

//     putData(data: Data) {
//         console.log(`Putting Data : ${data} `)
//         this.data = data
//     }

//     getData() {
//         return this.data;
//     }
// }



// let dr = new drive();
// dr.putData("123");
// dr.getData();


// ========== Constuctor ===============
// constuctor ka kam hota hai sb se phele class ke variables ko initialize krna or constuctor class ka ak special   method hota

//class Person {
   // public name: string  // ak ye tarika hai varibales bnane ka or dusra ye ke constuctor ke under hi public lga do to class me declare nh krna parega
    
//     constructor( public name: string) {
//         this.name = name
//     }

//     getName(){
//         return this.name;
//     }
// }
// let p = new Person("hello")
//console.log(p.getName())

// Acess Modifier
// class Modifier{
//     private password = 123; // ye srf apni main class m hi use krte class ke bhar access nh kr skte
//     protected id = 132; // ye apni class me or extends class me use krte bs
//     public name = "hello" // ye class ke bhar bh use krte print krwa skte sb jaga access ho skta ye
// }

//  Readonly property tb dete jb srf read krwani ho value

// getter and setter

// class Person{
//     constructor(public name:string){
//         this.name=name;
//     }

//     get Name(){
//         return this.name
//     }

//     set Name(name:string){
//         this.name = name;
//     }
// }

// let p1 = new Person("leelo")
