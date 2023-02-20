// you have to check for even numbers in an array and put them in a separate array


// let numbers = [1 , 2 , 20 , 35 , 12 , 17 , 46]

// let evenArray = []


// for(let i=0 ; i<numbers.length ; i++){
//        if(numbers[i]%2==0){
//               evenArray.push(numbers[i])
//        }
// }

// console.log(evenArray)



//filter
// Filter Returns a new Array it will return all those elememts that matches the specific condition
// if the conditions is true it will return the element for that condition and if it is false it will discard that element


let num = [1 , 2 , 20 , 35 , 12 , 17 , 46]


let evenNum = num.filter(function(n){
       return n%2==0
})

console.log(evenNum)


const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];

// 


const despositedAmount = transactions.filter(function(amount){
       return amount >0
})

console.log(despositedAmount)














