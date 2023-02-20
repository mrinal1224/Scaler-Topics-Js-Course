let arr = [
       {name: "A", age: 14, gender: "M"}, 
       {name: "B", age: 34, gender: "M"}, 
       {name: "C", age: 24, gender: "F"}, 
       {name: "D", age: 44, gender: "F"}, 
       {name: "E", age: 44, gender: "M"}, 
       {name: "I", age: 28, gender: "F"}, 
       {name: "G", age: 36, gender: "M"}, 
       {name: "H", age: 47, gender: "F"}
   ]


// Age of All the Men(Males)

let malesAges = arr.filter(function(obj){
       return obj.gender =='M'
}).map(function(male){
       return male.age
})




//From the Transactions Array filter out positive Elements and Calculate the total amount
//Use filter and Reduce to Achieve this


const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500]








console.log(malesAges)


