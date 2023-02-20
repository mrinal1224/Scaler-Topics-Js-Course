'use strict'


// console.log(this) // window Object


// function displayThis(){
//        console.log(this)  
// }

// displayThis() // window obj




// let myObj = {
//        name : 'Mrinal',
//        age : 23,

//        myFn1 : function(){
//               console.log(this)
//        }
// }

// myObj.myFn1()




let myObj2 = {
       name : 'Mrinal',
       age : 23,

       myFn2 : function(){
              function myFn3(){
                     console.log(this)
              }

               myFn3()
       }
}


myObj2.myFn2()