// we will be given a number and we have to check that if the sqaure of that number is even or not

// Imperative way of writing code
const a = 4

const aSquared = a*a

let isEven;


if(aSquared % 2==0){
   isEven = true
}

else{
       isEven = false
}

console.log(isEven)

// Declarative way of writing code 

const checkForSqaure = (x)=> (x*x%2 ===0 ? true : false)

console.log(checkForSqaure(5))

