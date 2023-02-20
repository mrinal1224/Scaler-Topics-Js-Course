// The for of statement creates a loop iterating over iterable objects, 
// including: built-in String, Array, array-like objects like NodeList and also map and set



var scores = [60 , 90 , 80 , 75]


// syntax

for(var score of scores){
       score = score+5
       console.log(score)
}


// method  - entries()

let colors = ['Red' , 'White' , 'Green']




for(var [index , color] of colors.entries()){
       console.log(index+'->'+ color)
}



// Strings 


var str = 'Scaler'


for(var c of str){
       console.log(c)
}












