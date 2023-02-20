// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values 
// from arrays, or properties from objects, into distinct variables.


// let arr = ['Hi' , 'I' , ,'am' , 'Mrinal']


// let a = arr[1]
// let b = arr[2]


// console.log(a)
// console.log(b)


// let [a , b , c , d , e] = arr


// console.log(c)


// Destructing an Object



let myObj = {
       name : 'Adam',
       age : 25,
       gender : 'M',

       address : {
              country : 'England',
              city : 'London'
       }
}


let {name :n ,age:a , gender:g , address:{country : c}} = myObj


console.log(n)
console.log(a)
console.log(g)
console.log(c)




