// loops are the statements that we can use to control a flow of the program and to do some repeatative

// var a = "Hello world";

// the for loop

// for (var i = 0; i < 10; i++) {
//   console.log(a);
// }

// you have an Array and you have to square Each element of that array

var num = [2, 3, 4, 5, 6, 7, 8];

var squaredArr = [] // empty array 


for(var i=0 ; i<num.length ; i++){
       squaredArr.push(num[i]*num[i])
}

console.log(squaredArr);
