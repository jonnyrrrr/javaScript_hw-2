//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function faveFoods(obj){
    for (let i = 0; i < Object.keys(obj).length; i++){
        console.log(Object.keys(obj)[i])
        console.log(Object.values(obj)[i])
    }

}

console.log(faveFoods(person3))



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

function person1(name, age){
    this.name = name;
    this.age = age;

    this.printInfo = () => {
        console.log(`My name is ${this.name} and I am ${this.age} years old`)
    }

}

let newPerson = new person1('Jaime', 20)

console.log(newPerson.printInfo())




// Use an arrow to create the printInfo method




// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

const addAge = () => {
  
} 

console.log(addAge(1))


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isItBigWord = (str) => {
    return new Promise( () => {
        if (str.length < 10){
            console.log('Small Word')
        } else {
            console.log('Big Word')
        }
    })
}

console.log(isItBigWord('I want to go home'))