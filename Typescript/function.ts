// Named function
// Anonymous function
// Arrow function
// Explicit return type
// Implicit return type
// Optional Parameters
// Default   Parameters
// Rest  Parameters

//  Named function void islye use kra ke kuch return nh krha function agr void ki jga string krdenge or return use krenge to possible hai
// function abcd():void{
// console.log("heello");
// }
// abcd()

// Anonymous function
// function ():void{
//     console.log("he")
// }


// Arrow Function


// const abc =():string=>{
//     let a:string = "he he ";
//     return a
// }

// console.log(abc())


// Explicit And Implicit return type

// function abc():string{  function ko type btana ke string return krha explicit or nh btaen type khud se lele wo implicit
//      return "hello"
// }
// function abc(){
//     return "jjj"  // implicit
// }

// Optional And Default Parameter

// function abc(name:string="user",age:number,birthdate?:number,){ mene parameter me birthdate? ke sth questionmarks use kia iska mtlb hai agr parameter user dede value theek hai wrna msla nh optional parameter khelta hai ye dusra mene name =user lihk dia ye default parameter user name nh btata to ye value use hogi

// console.log(name+age)
// }
// abc("www ",12);



// ==== REst Parameters
// function names(...name:string[]){
//     console.log(name)
// }

// names("Hello","world","xyz")


// Type ASsertion me hme html ko pkr decclare krte ye paragrapgh hai hrml hai  kia hsi

// function abc() {
//     document.querySelector("p") as HTMLParagraphElement;
// }



// literals 
// String literals Boolean and number literals ye sb wo literals ke ak bar kr : k sth value declare krdi to again wahi value rhk skte change nh kr skte
// heloo ko hello hi true rhki to true hi rhaegi false nh krskte
// let str:"heloo";
// str = "heloo"
// str = "wwww";