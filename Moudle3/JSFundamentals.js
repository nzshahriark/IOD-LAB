// 1. What are the results of these expressions? (answer first, then use console.log() to check)

"" + 1 + 0 // Output: "10"
"" - 1 + 0 // Output: -1
true + false // Output: 1
!true // Output: false
6 / "3" // Output: 2
"2" * "3" // Output: 6
4 + 5 + "px" // Output: "9px"
"$" + 4 + 5 // Output: "$45"
"4" - 2  // Output: 2
"4px" - 2  // Output: NaN
" -9 " + 5 // Output: " -9 5"
" -9 " - 5 // Output: -14
null + 1 // Output: 1
undefined + 1 // Output: NaN
undefined == null // Output: true
undefined === null // Output: false
" \t \n" - 2 // Output: -2

// 2. Which of the below are not giving the right answer? Why are they not correct? How can we fix them?

let three = "3"
let four = "4"
let thirty = "30"
//what is the value of the following expressions?
let addition = three + four // This will concatenate the strings "3" and "4" to produce "34"
let multiplication = three * four// NaN
let division = three / four// NaN 
let subtraction = three - four// NaN
let lessThan1 = three < four// False
let lessThan2 = thirty < four//True

          // Fixing it

// Convert strings to numbers for arithmetic operations
let addition = parseInt(three) + parseInt(four);
let multiplication= parseInt(three) * parseInt(four);
let division = parseInt(three) / parseInt(four);
let subtraction = parseInt(three) - parseInt(four);

// Compare numbers instead of strings for less than comparison
let lessThan1 = parseInt(three) < parseInt(four);
let lessThan2 = parseInt(thirty) < parseInt(four);

console.log(addition); // Output: 7
console.log(multiplication); // Output: 12
console.log(division); // Output: 0.75
console.log(subtraction); // Output: -1
console.log(lessThan1); // Output: true
console.log(lessThan2); // Output: false


//3. Which of the following console.log messages will print? Why?


//The console.log messages that will print are:

"#2 zero is true"
"negative is true"
"positive is true"

if (0) console.log('#1 zero is true')// '0' is considered falsy in JavaScript.
if ("0") console.log('#2 zero is true')//the string "0" is considered truthy in JavaScript. Any non-empty string (including "0") is truthy
if (null) console.log('null is true')//null is considered falsy in JavaScript. 
if (-1) console.log('negative is true')//'-1' is considered truthy in JavaScript. Any non-zero number (positive or negative) is truthy
if (1) console.log('positive is true')// '1' is a non-zero number and therefore truthy

//4. Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a
//and b. What does the ‘+=’ do?

let a = 2, b = 3;
let result = `${a} + ${b} is `;
if (a + b < 10) {
result += 'less than 10';
} else {
result += 'greater than 10';
}

  // Rewritten using the ternary/conditional operator '?'//

let a = 2, b = 3;
let result = `${a} + ${b} is ${a + b < 10 ? 'less than 10' : 'greater than 10'}`;
console.log(result);

let a = 4, b = 5;
let result = `${a} + ${b} is ${a + b < 10 ? 'less than 10' : 'greater than 10'}`;
console.log(result);


//5. Rewrite the following function using: a) function expression syntax, and b) arrow function
//syntax. Test each version to make sure they work the same.


function getGreeting(name) {
    return 'Hello ' + name + '!';}

   // a) Function expression syntax://

let getGreeting = function(name) {
    return 'Hello ' + name + '!';
};

console.log(getGreeting('John')); // Output: Hello John!

  // b) Arrow function syntax:

let getGreeting = (name) => 'Hello ' + name + '!';
console.log(getGreeting('Jane')); // Output: Hello Jane!



//6. a) Complete the inigo object by adding a lastName property and including it in the greeting.

//b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead
//prints his famous catch phrase to the console.

//c) Update getCatchPhrase to use arrow function syntax and a conditional operator.

const westley = {
    name: 'Westley',
    numFingers: 5
    }
    const rugen = {
    name: 'Count Rugen',
    numFingers: 6
    }
    const inigo = {
    firstName: 'Inigo',
    greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName}. `;
    console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase(person) {
    return 'Nice to meet you.';
    }
    }
    inigo.greeting(westley)
    inigo.greeting(rugen)


    //a) Complete the inigo object by adding a lastName property and including it in the greeting:

    const Inigo = {
        firstName: 'Inigo',
        lastName: 'Montoya', // Adding the lastName property
        greeting(person) {
          let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}.`; // Including lastName in the greeting
          console.log(greeting + this.getCatchPhrase(person));
        },
        getCatchPhrase(person) {
          return 'Nice to meet you.';
        }
      };

             //b//

             const inigo = {
                firstName: 'Inigo',
                lastName: 'Montoya',
                greeting(person) {
                  let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
                  console.log(greeting + this.getCatchPhrase(person)); // Updated to call getCatchPhrase with person
                },
                getCatchPhrase(person) { // Updated to take person as an argument
                  if (person.numFingers === 6) { // Check if the person has 6 fingers
                    return 'You killed my father. Prepare to die!'; // Famous catchphrase for Count Rugen
                  } else {
                    return 'Nice to meet you.'; // Default catchphrase
                  }
                }
              };       


              // c//

              const inigo = {
                firstName: 'Inigo',
                lastName: 'Montoya',
                greeting(person) {
                  let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
                  console.log(greeting + this.getCatchPhrase(person)); // Updated to call getCatchPhrase with person
                },
                getCatchPhrase: (person) => person.numFingers === 6 ? 'You killed my father. Prepare to die!' : 'Nice to meet you.'
              };

             //7. The following object represents a basketball game and keeps track of the score as the
             // game progresses.

             // a) Modify each of the methods so that they can be ‘chained’ together and the last line of
             // the example code works

             // b) Add a new method to print the full time final score

             // c) Add a new object property to keep track of the number of fouls and a method to
             // increment it, similar but separate to the score. Include the foul count in the half time and
             // full time console messages

              //d) Test your object by chaining all the method calls together in different combinations.       



              const basketballGame = {
                score: 0,
                freeThrow() {
                this.score++;
                },
                basket() {
                this.score += 2;
                },
                threePointer() {
                this.score += 3;
                },
                halfTime() {
                console.log('Halftime score is '+this.score);
                }
                }
                //modify each of the above object methods to enable function chaining as below:
                basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();


                //a, b, c//

                const basketballGame = {
                    score: 0,
                    freeThrow() {
                      this.score++;
                      return this; // Return the object to enable chaining
                    },
                    basket() {
                      this.score += 2;
                      return this; // Return the object to enable chaining
                    },
                    threePointer() {
                      this.score += 3;
                      return this; // Return the object to enable chaining
                    },
                    halfTime() {
                      console.log('Halftime score is ' + this.score + '. Fouls: ' + this.foulCount); // Include foul count in console message
                      return this; // Return the object to enable chaining
                    },
                    fullTime() {
                      console.log('Full time score is ' + this.score + '. Fouls: ' + this.foulCount); // Include foul count in console message
                      return this; // Return the object to enable chaining
                    },
                    foulCount: 0, // Initialize foul count property
                    incrementFoulCount() {
                      this.foulCount++;
                      return this; // Return the object to enable chaining
                    }
                  };

                  // d//
 basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();
basketballGame.basket().threePointer().incrementFoulCount().freeThrow().halfTime().fullTime().incrementFoulCount().fullTime();

  //8. The object below represents a single city.

//a) Write a function that takes an object as an argument and uses a for...in loop to access
//and print to the console each of those object properties and their values. Test it using
//the sydney object below.

//b) Create a new object for a different city with different properties and call your function
//again with the new object.

const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'}

    //a//

    function printObjectProperties(obj) {
        for (let property in obj) {
          console.log(`${property}: ${obj[property]}`);
        }
      }
      
      const sydney = {
        name: 'Sydney',
        population: 5_121_000,
        state: 'NSW',
        founded: '26 January 1788',
        timezone: 'Australia/Sydney'
      };
      
      printObjectProperties(sydney);
      
      //b//

      const newYork = {
        name: 'New York',
        population: 8_175_133,
        state: 'New York',
        founded: '1624',
        timezone: 'America/New_York'
      };
      
      printObjectProperties(newYork);


//9. Use the following variables to understand how JavaScript stores objects by reference.
// a) Create a new moreSports variable equal to teamSports and add some new sport
//values to it (using push and unshift)

//b) Create a new dog2 variable equal to dog1 and give it a new value

//c) Create a new cat2 variable equal to cat1 and change its name property

//d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
//changed? Why?

//e) Change the way the moreSports and cat2 variables are created to ensure the
//originals remain independent


let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

//a//

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let moreSports = [...teamSports]; // Using spread syntax to create a new array and copy values from teamSports
moreSports.push('Football');
moreSports.unshift('Tennis');
console.log(moreSports); // Output: ['Tennis', 'Hockey', 'Cricket', 'Volleyball', 'Football']

//b//

let dog1 = 'Bingo';
let dog2 = dog1; // Assigning the value of dog1 to dog2
dog2 = 'Max';
console.log(dog1); // Output: 'Bingo' (dog1 remains unchanged)
console.log(dog2); // Output: 'Max' (dog2 has the new value)

//c//

let cat1 = { name: 'Fluffy', breed: 'Siberian' };
let cat2 = cat1; // Assigning the object reference of cat1 to cat2
cat2.name = 'Whiskers';
console.log(cat1.name); // Output: 'Whiskers' (cat1's name property is changed)
console.log(cat2.name); // Output: 'Whiskers' (cat2 also references the same object as cat1)

//d//

console.log(teamSports); // Output: ['Hockey', 'Cricket', 'Volleyball']
console.log(dog1); // Output: 'Bingo'
console.log(cat1); // Output: { name: 'Whiskers', breed: 'Siberian' }

//e//

        //For 'moreSports':

let moreSports = [...teamSports, 'Football', 'Tennis']; // Using spread syntax to create a new array with additional values

        //For 'cat2':
let cat2 = { ...cat1, name: 'Whiskers' }; // Using spread syntax to create a new object with the same properties as cat1 but with a modified name        


//10. The following constructor function creates a new Person object with the given name and
//age values.
//a) Create a new person using the constructor function and store it in a variable

//b) Create a second person using different name and age values and store it in a separate
//variable

//c) Print out the properties of each person object to the console

//d) Rewrite the constructor function as a class called PersonClass and use it to create a
//third person using different name and age values. Print it to the console as well.

//e) Add a canDrive method to both the constructor function and the class that returns true
//if the person is old enough to drive.

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;}


     //a//   

     function Person(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
    }
    
    let person1 = new Person('Alice', 30);

    //b//

    let person2 = new Person('Bob', 25);

    //c//

console.log(person1); // Output: Person { name: 'Alice', age: 30, human: true }
console.log(person2); // Output: Person { name: 'Bob', age: 25, human: true }

    //d//

    class PersonClass {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.human = true;
        }
    }
    
    let person3 = new PersonClass('Charlie', 35);
    console.log(person3); // Output: PersonClass { name: 'Charlie', age: 35, human: true }   


    //e//

    // Using the constructor function//

    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
        this.canDrive = function() {
            return this.age >= 16; // Assuming driving age is 16
        };
    }
    
    let person4 = new Person('Dave', 18);
    console.log(person4.canDrive()); // Output: true


    //Using the class://

    class PersonClass {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.human = true;
        }
    
        canDrive() {
            return this.age >= 16; // Assuming driving age is 16
        }
    }
    
    let person5 = new PersonClass('Eve', 14);
    console.log(person5.canDrive()); // Output: false

    