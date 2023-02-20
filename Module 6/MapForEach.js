// 

// let arr = [1 , 2  , 3 ,4 ,5]

// let sqauredArr = []


// for(let i=0 ; i<arr.length ; i++){
//        sqauredArr.push(arr[i]*arr[i])
// }

// console.log(sqauredArr)



// map 

//Map will loop through every elemet of your array and will perform specific operations that you have provided

// Map method will always return you a new array with your results

// const num = [1 , 2, 3 ,4, 5]

// const squaredNum = num.map(function(n){
//        return n*n
// })

// console.log(squaredNum)


const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];

const inrtoDollar = 80;


let transactionsInDollars = transactions.map((amount)=>{
       return (amount/inrtoDollar).toFixed(0)
})

console.log(transactionsInDollars)


let transactionsInDollars1 = transactions.forEach((amount)=>{
       console.log((amount/inrtoDollar).toFixed(0))
})


console.log(transactionsInDollars1)













