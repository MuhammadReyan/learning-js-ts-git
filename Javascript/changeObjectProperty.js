

const chai = {
    name: "chaii",
    price: 250,
    isAvaible: true,
    chai: function () {
        console.log("chai ban gai ");
    }
}


console.log(Object.getOwnPropertyDescriptor(chai, "name"))

// abh object ki value change ho skti getownprodes se pta chalta hai object ki property writeable configure hai ya enumerable hai hm change krskte ya nh enumerable false krdon to uspr loop nh kam kryga
// Object.defineProperty(chai, 'name', {
//     writable: false,
//     enumerable: false
// })
console.log(Object.getOwnPropertyDescriptor(chai, "name"))
// abb value change nh kr skte 

// Acha jee object pr direect iteration nh skte means loop nh lga skte ak tarika se lga skte dekho

for (let [key, value] of Object.entries(chai)) {
    // agr object me method bh to ye condition lgani prti

    if (typeof value !== 'function')

        console.log(`${key} : ${value} `)
}