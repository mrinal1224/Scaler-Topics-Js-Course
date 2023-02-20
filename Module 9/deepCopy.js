let firstPerson = {
       name :'Adam',
       age :23,

       address : {
          city : 'Lucknow',
          state: 'UP'

       }
}


let secondPerson = JSON.parse(JSON.stringify(firstPerson)) // Deep Copy 


secondPerson.address.city = 'Delhi'


console.log(firstPerson)

console.log(secondPerson)