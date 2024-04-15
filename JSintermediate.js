//1. Create a function that takes a string as a parameter and returns the string with the first
//character of each word changed into a capital letter, as in the example below. Test it with
//different strings.

console.log(ucFirstLetters("los angeles") ) //Los Angeles


function ucFirstLetters(str) {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
  }
  
  console.log(ucFirstLetters("los angeles")); // Output: "Los Angeles"
  console.log(ucFirstLetters("new york city")); // Output: "New York City"
  console.log(ucFirstLetters("san francisco bay area")); // Output: "San Francisco Bay Area"


 //2. Create a function truncate(str, max) that truncates a given string of text if its total
//length is greater than the max length. It should return either the truncated text, with an
//ellipsis (...) added to the end if it was too long, or the original text otherwise.

//b) Write another variant of the truncate function that uses a conditional operator.

console.log(truncate('This text will be truncated if it is too long', 25)) // This text will be truncat...


//a//

function truncate(str, max) {
    if (str.length > max) {
      return str.substring(0, max) + '...';
    }
    return str;
  }
  
  console.log(truncate('This text will be truncated if it is too long', 25));
  // Output: "This text will be truncat..."
  console.log(truncate('Short text', 25)); // Output: "Short text"

 //b//
 
 function truncate(str, max) {
    return str.length > max ? str.substring(0, max) + '...' : str;
  }
  
  console.log(truncate('This text will be truncated if it is too long', 25));
  // Output: "This text will be truncat..."
  console.log(truncate('Short text', 25)); // Output: "Short text"


 //3.Use the following animals array for the below tasks. Test each one by printing the result to
//the console. Review the following link for tips:

//a) Add 2 new values to the end

//b) Add 2 new values to the beginning

//c) Sort the values alphabetically
//d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
//middle of the animals array with newValue

//e) Write a function findMatchingAnimals(beginsWith) that returns a new array
//containing all the animals that begin with the beginsWith string. Try to make it work
//regardless of upper/lower case.  

const animals = ['Tiger', 'Giraffe']
console.log(animals)


// a) Add 2 new values to the end
animals.push('Elephant', 'Lion');
console.log(animals); // Output: ['Tiger', 'Giraffe', 'Elephant', 'Lion']

// b) Add 2 new values to the beginning
animals.unshift('Monkey', 'Zebra');
console.log(animals); // Output: ['Monkey', 'Zebra', 'Tiger', 'Giraffe', 'Elephant', 'Lion']

// c) Sort the values alphabetically
animals.sort();
console.log(animals); // Output: ['Elephant', 'Giraffe', 'Lion', 'Monkey', 'Tiger', 'Zebra']


//d
function replaceMiddleAnimal(newValue) {
    const middleIndex = Math.floor(animals.length / 2);
    animals.splice(middleIndex, 1, newValue);
  }
  replaceMiddleAnimal('Bear');
  console.log(animals); // Output: ['Elephant', 'Giraffe', 'Bear', 'Monkey', 'Tiger', 'Zebra']

 //e
 function findMatchingAnimals(beginsWith) {
    return animals.filter(animal => animal.toLowerCase().startsWith(beginsWith.toLowerCase()));
  }
  console.log(findMatchingAnimals('t')); // Output: ['Tiger']
  console.log(findMatchingAnimals('Z')); // Output: ['Zebra']
  console.log(findMatchingAnimals('g')); // Output: ['Giraffe', 'Bear'] 


  //4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like
//'margin-left' into camel-cased 'marginLeft'.
//The function should remove all dashes, and uppercase the first letter of each word after a
//dash.
//b) Create variants of the camelCase function that use different types of for loops, and
//c) with and without the conditional operator.

console.log(camelCase('margin-left')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display


// Using for...of loop and conditional operator
function camelCase(cssProp) {
    let camelCased = '';
    let capitalizeNext = false;
  
    for (const char of cssProp) {
      if (char === '-') {
        capitalizeNext = true;
      } else {
        camelCased += capitalizeNext ? char.toUpperCase() : char;
        capitalizeNext = false;
      }
    }
  
    return camelCased;
  }
  
  // Using for loop without conditional operator
  function camelCaseVariant1(cssProp) {
    let camelCased = '';
  
    for (let i = 0; i < cssProp.length; i++) {
      if (cssProp[i] === '-') {
        camelCased += cssProp[i + 1].toUpperCase();
        i++; // Skip the dash and the next character (which is already capitalized)
      } else {
        camelCased += cssProp[i];
      }
    }
  
    return camelCased;
  }
  
  // Using forEach loop and conditional operator
  function camelCaseVariant2(cssProp) {
    let camelCased = '';
    let capitalizeNext = false;
  
    [...cssProp].forEach(char => {
      if (char === '-') {
        capitalizeNext = true;
      } else {
        camelCased += capitalizeNext ? char.toUpperCase() : char;
        capitalizeNext = false;
      }
    });
  
    return camelCased;
  }
  
  console.log(camelCase('margin-left')); // Output: "marginLeft"
  console.log(camelCase('background-image')); // Output: "backgroundImage"
  console.log(camelCase('display')); // Output: "display"
  
  console.log(camelCaseVariant1('margin-left')); // Output: "marginLeft"
  console.log(camelCaseVariant1('background-image')); // Output: "backgroundImage"
  console.log(camelCaseVariant1('display')); // Output: "display"
  
  console.log(camelCaseVariant2('margin-left')); // Output: "marginLeft"
  console.log(camelCaseVariant2('background-image')); // Output: "backgroundImage"
  console.log(camelCaseVariant2('display')); // Output: "display"


//5.Decimal number operations in JavaScript can lead to unexpected results, as in the
//following:

let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)

// 0.2 + 0.1 = 0.30000000000000004
//We can sometimes avoid this using the toFixed function to force the number of decimal
//places as below, but it’s not always useful:

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen) //why is this not working?

//a) Explain why the above code returns the wrong answer

//b) Create a function currencyAddition(float1, float2) which safely adds the two
//decimal numbers float1 and float2 and returns the correct float result.

//c) Create a function currencyOperation(float1, float2, operation) which
//safely performs the given operation (either +, -, / or *) on the two 
//numbers and returns the correct float result.

//d)(Extension) Extend the above function to include a fourth argument numDecimals
//which allows the operation to support different amounts of decimal places from 1 to 10.

console.log(0.3 == currencyAddition(0.1, 0.2)) // true
console.log(0.3 == currencyOperation(0.1, 0.2, '+')) // true

//a

//a) The reason the code console.log(fixedTwenty + fixedTen) does not work as expected 
//is because toFixed() converts the number to a string with the specified number of 
//decimal places, but it does not perform arithmetic operations on the numbers. 
//When we concatenate two strings like fixedTwenty and fixedTen, we are simply 
//concatenating the strings, not adding the actual numbers.


//b
function currencyAddition(float1, float2) {
    return parseFloat((float1 + float2).toFixed(2));
  }
  
  console.log(0.3 == currencyAddition(0.1, 0.2)); // true

//c
function currencyOperation(float1, float2, operation) {
    let result;
    switch (operation) {
      case '+':
        result = float1 + float2;
        break;
      case '-':
        result = float1 - float2;
        break;
      case '*':
        result = float1 * float2;
        break;
      case '/':
        result = float1 / float2;
        break;
      default:
        result = NaN; // Not a Number if the operation is not recognized
    }
    return parseFloat(result.toFixed(2));
  }
  
  console.log(0.3 == currencyOperation(0.1, 0.2, '+')); // true

//d
function currencyOperation(float1, float2, operation, numDecimals = 2) {
    let result;
    switch (operation) {
      case '+':
        result = float1 + float2;
        break;
      case '-':
        result = float1 - float2;
        break;
      case '*':
        result = float1 * float2;
        break;
      case '/':
        result = float1 / float2;
        break;
      default:
        result = NaN; // Not a Number if the operation is not recognized
    }
    const multiplier = Math.pow(10, numDecimals);
    return parseFloat((Math.round(result * multiplier) / multiplier).toFixed(numDecimals));
  }
  
  // Testing with different decimal places
  console.log(0.3 == currencyOperation(0.1, 0.2, '+', 1)); // true
  console.log(0.3 == currencyOperation(0.1, 0.2, '+', 3)); // true
  console.log(0.3 == currencyOperation(0.1, 0.2, '+', 4)); // false, rounded to 0.3000  



//6.Create a function unique(duplicatesArray) which takes an array parameter that may
//include duplicates. Your function should return an array containing only the unique values
//from duplicatesArray.
//Test with the following arrays and create another one of your own.

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]


function unique(duplicatesArray) {
    return Array.from(new Set(duplicatesArray));
  }
  
  const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'];
  const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
  
  console.log(unique(colours)); // Output: [ 'red', 'green', 'blue', 'yellow', 'orange' ]
  console.log(unique(testScores)); // Output: [ 55, 84, 97, 63, 32, 91, 43 ]

//7.Use the following array of book objects to practice the array functions for map, find and
//filter. Test each of your answers to the below tasks.  

const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

//a) Write a function getBookTitle(bookId) that uses the find function to return the
//title of the book object with the matching id.

//b) Write a function getOldBooks() that uses the filter function to return all book
//objects written before 1950.

//c) Write a function addGenre() that uses the map function to add a new genre property
//to all of the above books, with the value ‘classic’.

//d) (Extension) Write a function getTitles(authorInitial) that uses map and
//filter together to return an array of book titles for books written by authors whose
//names start with authorInitial.

//e) (Extension) Write a function latestBook() that uses find and forEach to get the
//book with the most recent publication date.


//a
function getBookTitle(bookId) {
    const book = books.find(book => book.id === bookId);
    return book ? book.title : 'Book not found';
  }
  
  console.log(getBookTitle(3)); // Output: "1984"
  console.log(getBookTitle(6)); // Output: "Book not found"

//b
function getOldBooks() {
    return books.filter(book => book.year < 1950);
  }
  
  console.log(getOldBooks());
  // Output:
  // [
  //   { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  //   { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
  //   { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 }
  // ]
  

//c
function addGenre() {
    return books.map(book => ({ ...book, genre: 'classic' }));
  }
  
  console.log(addGenre());
  // Output:
  // [
  //   { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925, genre: 'classic' },
  //   { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, genre: 'classic' },
  //   { id: 3, title: '1984', author: 'George Orwell', year: 1949, genre: 'classic' },
  //   { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932, genre: 'classic' },
  //   { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951, genre: 'classic' }
  // ]
  
d//
function getTitles(authorInitial) {
    return books
      .filter(book => book.author.startsWith(authorInitial))
      .map(book => book.title);
  }
  
  console.log(getTitles('G')); // Output: ["The Great Gatsby", "1984"]
  console.log(getTitles('J')); // Output: ["The Catcher in the Rye"]
  console.log(getTitles('A')); // Output: ["To Kill a Mockingbird", "Brave New World"]
  
//e
function latestBook() {
    let latest = null;
    books.forEach(book => {
      if (!latest || book.year > latest.year) {
        latest = book;
      }
    });
    return latest;
  }
  
  console.log(latestBook()); // Output: { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }  



//8.The following code creates a new Map object for storing names beginning with A, B, or C
//with their phone numbers.  

const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

//a) Create a new phoneBookDEF Map to store names beginning with D, E or F

//b) Initialise the contents of phoneBookDEF by passing in an array of keys/values

//c) Update the phone number for Caroline

//d) Write a function printPhoneBook(contacts) that prints the names and phone
//numbers in the given Map

//e) Combine the contents of the two individual Maps into a single phoneBook Map

//f) Print out the full list of names in the combined phone book


//a
const phoneBookDEF = new Map();

//b
const entriesDEF = [
  ['David', '0421122334'],
  ['Emily', '0434455667'],
  ['Frank', '0467788990']
];
const phoneBookDEF = new Map(entriesDEF);

//c
phoneBookABC.set('Caroline', '0455112233');

//d
function printPhoneBook(contacts) {
    contacts.forEach((number, name) => {
      console.log(`${name}: ${number}`);
    });
  }
  
  // Print phoneBookABC
  printPhoneBook(phoneBookABC);
  // Output:
  // Annabelle: 0412312343
  // Barry: 0433221117
  // Caroline: 0455112233
  
  // Print phoneBookDEF
  printPhoneBook(phoneBookDEF);
  // Output:
  // David: 0421122334
  // Emily: 0434455667
  // Frank: 0467788990

  //e
  const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

  //f
  console.log(Array.from(phoneBook.keys()));
// Output:
// [ 'Annabelle', 'Barry', 'Caroline', 'David', 'Emily', 'Frank' ]


//9. Given the below salaries object, perform the following tasks.

let salaries = {
    "Timothy" : 35000,
    "David" : 25000,
    "Mary" : 55000,
    "Christina" : 75000,
    "James" : 43000}

//a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries

//b) Write a function topEarner(salaries) that calculates and returns the name of the person
//earning the highest salary    


//a
function sumSalaries(salaries) {
    let totalSalary = 0;
    for (let salary of Object.values(salaries)) {
      totalSalary += salary;
    }
    return totalSalary;
  }
  
  console.log(sumSalaries(salaries)); // Output: 233000

//b
function topEarner(salaries) {
    let maxSalary = 0;
    let topEarnerName = '';
    for (let [name, salary] of Object.entries(salaries)) {
      if (salary > maxSalary) {
        maxSalary = salary;
        topEarnerName = name;
      }
    }
    return topEarnerName;
  }
  
  console.log(topEarner(salaries)); // Output: "Christina"  


//10.The following code uses the Date object to print the current time and the number of hours
//that have passed today so far. Extend the code to do the following:  

//const today = new Date();
//console.log('Current time is ' + today.toLocaleTimeString())
//console.log(today.getHours() + ' hours have passed so far today')

//a) Print the total number of minutes that have passed so far today

//b) Print the total number of seconds that have passed so far today

//c) Calculate and print your age as: 'I am x years, y months and z days old'

//d) Write a function daysInBetween(date1, date2) which calculates and returns the amount
//of days in between the two given dates.


const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString());
console.log(today.getHours() + ' hours have passed so far today');

// a) Print the total number of minutes that have passed so far today
const totalMinutes = today.getHours() * 60 + today.getMinutes();
console.log(totalMinutes + ' minutes have passed so far today');

// b) Print the total number of seconds that have passed so far today
const totalSeconds = totalMinutes * 60 + today.getSeconds();
console.log(totalSeconds + ' seconds have passed so far today');

// c) Calculate and print your age as: 'I am x years, y months and z days old'
const birthDate = new Date('2000-01-01'); 
const ageInMilliseconds = today - birthDate;
const ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));
const years = Math.floor(ageInDays / 365);
const months = Math.floor((ageInDays % 365) / 30);
const days = ageInDays % 30;
console.log(`I am ${years} years, ${months} months, and ${days} days old`);

// d) Write a function daysInBetween(date1, date2) which calculates and returns the amount of days in between the two given dates.
function daysInBetween(date1, date2) {
  const oneDay = 1000 * 60 * 60 * 24; // milliseconds in a day
  const difference = Math.abs(date1.getTime() - date2.getTime());
  return Math.floor(difference / oneDay);
}

const date1 = new Date('2022-01-01'); // Replace with your start date
const date2 = new Date(); // Use today's date as the end date
console.log(daysInBetween(date1, date2) + ' days have passed between the dates.');