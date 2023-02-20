'use strict'

//console.log(this)


// function displayThis(){
//        console.log(this)  
// }

// displayThis()



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