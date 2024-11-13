"use strict";
//  Basic Types
// Number String Boolean
//Arrays Tuples
//Any , Unknown , Never , Void
// Enums
//let str:string; // if you want to do value after the declaration  so you must define the type in variable 
//str = "hello";// future value
//let arr : boolean; // Array 
//let array =[1,2,3,4,5];
// Tuples   like fixed size and what element are enter in tuples
//let tuple :[number,string] = [1,'hello'] // can not add more value because tuple said me how many values in there with type.
//tuple.push(3) // this is  bug you add 3 element in tuple but tuple length only 2 but typscrit bug you add more element like this
// 34:00 
//let variable : any; // if you are not sure which type you required in your variable to create your variable with any type or unknown type
//variable = 'string'
//variable = 12
// Unknown Type simpler like any but some few difference between unknown and any
//let variable2 : any; // if you are not sure which type you required in your variable to create your variable with any type or unknown type
//variable2 = 'string'
//variable2 = 12
// Never
//A function that has a never return type never returns. It doesn't return undefined, either. The function doesn't have a normal completion, which means it throws an error or never finishes running at all.
// function infinite() :never {
// while(true){
//     console.log('infinite run')
// }
// }
// infinite();
//  Void
//  void type indicate this function does not return a value because function have void type
// function abc():void{
//     console.log('hey')
// }
// Enums are help to create group like couples values
// enum direction{
//     Top= "top",
//     left="left"
// }
// Type Inference ye hota hai ke wo khud guest krleta ke variable number hai string hai etc 
// let a= 12;
// let b = 33;
// let str = "hello";
// Union sure nh hote ke variable string hai ya number tb hm union use krte use | union nishan
// let a: string | number;
// a="12";
//  if(typeof a === 'string'){
// a.concat(); // yaha agr string hua variable to hm string ke sare method use krte 
//  }else if(typeof a === number ){
// // yaha error arha kio ke string hai wo number hota to number ke sare method use krte like math.round etc
//  }
//  Yahi chiz agr function se krenge
// function abcd(a:string|number){
//       if(typeof a === 'string'){
//  a.concat(); // yaha agr string hua variable to hm string ke sare method use krte 
//   }else if(typeof a === 'number' ){
// a.toFixed(2)
//  }
// }
// abcd("2");
// abcd(2.2)
// Interjection ke lye type or interfaces zarrori hai prhna
// hm type bna rhae jese string ak type hai hm apni custom type bna rhae
// type Classmates={
// section:string
// }
// type Students = {
//     name: string
// }
// type ClassStudents = Classmates & Students;
// let a:ClassStudents={
//     name:"hello",
//     section:"abc"
// }
// type bna kr dono Interjection krdia
//  ===   Type Aliases
// Aacha hmne yaha apna type bna lia jese ke string ka ab hmhe jb bh string ka variable chaye hoga to hm Name lihk skte string bh lihk skte bs concept hai type ka 
// Primitives types 
// type Name = string;
// let a: Name;
//Object Types 
// Yaha type bnai object ko use krte hue
// type User ={
//     name:string,
//     id:number
// }
// let user:User={
//     name:"hello",
//     id:12
// }
