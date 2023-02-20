// function printFirstName(firstname , cb){
//        console.log(firstname)
//        cb('Rogers')
// }

// function printLastName(lastname){
//        console.log(lastname)
// }


// printFirstName('Steve' , printLastName )// callback




// 

const isEven = (n)=>{
    return n%2==0
}


let printResult = (evenFn , num ) =>{
       const isNumEven = evenFn(num)

       console.log(`The number ${num} is an Even Number ${isNumEven} `)
}



printResult(isEven , 9)