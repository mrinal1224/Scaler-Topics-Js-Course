// setTimeout(cb , 2000 )

console.log('Before')


function greet(){
       console.log('Hello from the setTimeout')
}


setTimeout(greet , 5000)

console.log('After')