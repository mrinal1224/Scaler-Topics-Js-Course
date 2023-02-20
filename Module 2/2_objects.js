// in Js objects are in key value pair

var person = {
       firstName : 'Adam',
       secondName : 'Smith',
       age:25,
       ownsCar : false

}



//console.log(person)


// dot notation
// console.log(person.age) // 25

// // bracket notation
// console.log(person['firstName']) // Adam



var cap = {
       firstName : 'Steve',
       lastName : 'Rogers',
       age : 102,

       friends : ['Bucky Barnes' , 'Bruce Banner' , 'Tony Stark'],

       isAvenger : true,

       address : {
               state : 'New York',
               city : {
                     name : 'Brooklyn',
                     pincode : 123456
               }
       }
}


console.log(cap.friends[1]) // Bruce Banner


console.log(cap.address.city.name) // Brooklyn


cap.isAvenger = false

console.log(cap)


cap.movies = ['age of ultron' , 'civil war' , 'first avenger']

console.log(cap)


delete cap.age

console.log(cap)




