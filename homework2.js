//Write a program to add up all the elements of a number array.//
//declared variables//

const numArray = [10, 20, 30, 40, 50, 50, 40, 78, 12, 0, 1];
let sum=0;

//moves through index and adds numbers//

for( let i=0; i<numArray.length; i++){
      sum += numArray[i]
}
//output//

console.log(sum)
console.log()

//Write a program to look for the user input in an array. When it finds the first occurrence, 
//display the value and the index of that value//

//prompt for user//

let prompt = require('prompt-sync')()
let input = (prompt('What is your favorite Pizza?!!!! "New York", "Chicago", "Detroit", "Red Baron", "Digorno"?     ')).toLowerCase()

//array declaration//

let pizzaArray = ["New York", "Chicago", "Detroit", "Red Baron", "Digorno"];
//converts the array to a new array to change letter type to check for all Cases//

let convertedPizza = pizzaArray.map(pizza=> pizza.toLowerCase());

//output//


console.log()
console.log(`Your Favorite pizza is ${input} and it is at a pizzadex ${convertedPizza.indexOf(input)}! Pizzadex is a trademark of Jim Bundy enterprises.`)

   // 3. Write a program to find the longest element in a string array//

//declared Array and variables//

    let longArray =['Hello', 'Hellooooooooo!', 'Hi', 'Sup','Hiiiiiiiiiiiiiiiiiiii!Tishana!!!!!!!!']
    let lgth=0
    let bigBoy;

//checks the length of each word in the array


    for(let i =0; i< longArray.length; i++){
        if (longArray[i].length> lgth){
            let lgth = longArray[i].length;
            bigBoy=longArray[i];
        }
    }
////logs output    
    console.log()
    console.log(bigBoy)



