class Person {
       constructor(_name , _age){
             this.name = _name
             this.age = _age
       }


       welcome(){
              console.log(`Welcome ${this.name}`)
       }
}


let Person1 = new Person('Adam' , 19)

let Person2 = new Person('Steve' , 25)

let Person3 = new Person('Mark' , 26)

Person2.welcome()



console.log(Person1)
console.log(Person2)
console.log(Person3)