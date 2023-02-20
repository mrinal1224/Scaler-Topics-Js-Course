/// spread operator {...}


let firstPerson = {
       name :'Adam',
       age :23,

       address : {
          city : 'Lucknow',
          state: 'UP'

       }
}


let secondPerson = {...firstPerson} // Shallow Copy

secondPerson.name = 'Steve'

secondPerson.address.city = 'Delhi'


console.log(firstPerson)
console.log(secondPerson)