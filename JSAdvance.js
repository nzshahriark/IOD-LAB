//1.makeCounter below is a decorator function which creates and returns a function that
//increments a counter.
//a) Create a second counter counter2 using the makeCounter function and test to see if
//it remains independent to counter1

//b) Modify makeCounter so that it takes an argument startFrom specifying where the
//counter starts from (instead of always starting from 0)

//c) Modify makeCounter to take another argument incrementBy, which specifies how
//much each call to counter() should increase the counter value by.

function makeCounter() {
    let currentCount = 0;
    return function() {
    currentCount++;
    console.log(currentCount)
    return currentCount;
    };
    }
    let counter1 = makeCounter();
    counter1(); // 1
    counter1(); // 2

  //a
  
  let counter2 = makeCounter();
counter2(); // 1
counter2(); // 2

//b

function makeCounter(startFrom) {
    let currentCount = startFrom || 0; // Default to 0 if startFrom is not provided
    return function() {
        currentCount++;
        console.log(currentCount);
        return currentCount;
    };
}

let counter3 = makeCounter(5); // Start counter from 5
counter3(); // 6
counter3(); // 7

//c

function makeCounter(startFrom, incrementBy) {
    let currentCount = startFrom || 0;
    incrementBy = incrementBy || 1; // Default incrementBy to 1 if not provided
    return function() {
        currentCount += incrementBy;
        console.log(currentCount);
        return currentCount;
    };
}

let counter4 = makeCounter(0, 2); // Start counter from 0 and increment by 2
counter4(); // 2
counter4(); // 4


//2.The following delayMsg function is intended to be used to delay printing a message until
//some time has passed.

//a) What order will the four tests below print in? Why?

//b) Rewrite delayMsg as an arrow function

//c) Add a fifth test which uses a large delay time (greater than 10 seconds)

//d) Use clearTimeout to prevent the fifth test from printing at all.

function delayMsg(msg)
{
console.log(`This message will be printed after a delay: ${msg}`)
}
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')

//a

//#4: Not delayed at all will be printed first because it is a synchronous call to delayMsg.
//#3: Delayed by 0ms will be printed next because even though it's set to delay by 0ms, it still goes through the asynchronous event loop.
//#2: Delayed by 20ms will be printed next because it has a 20ms delay, which is longer than the 0ms delay of the previous call.
//#1: Delayed by 100ms will be printed last because it has the longest delay among all the setTimeout calls.

//b

const delayMsg = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`);
};

//c

setTimeout(delayMsg, 15000, '#5: Delayed by 15000ms');

//d

const timeoutId = setTimeout(delayMsg, 15000, '#5: Delayed by 15000ms');
clearTimeout(timeoutId);

//3. 'Debouncing' is a concept that refers to 'putting off' the execution of multiple, fast-timed,
//similar requests until there's a brief pause, then only executing the most recent of those
//requests.

//It's often used to handle fast-firing scrolling events in a browser, or to prevent multiple server
//requests being initiated if a user clicks repeatedly on a button.
//Using the following code to test and start with:

//a) Create a debounce(func) decorator, which is a wrapper that takes a function func and
//suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second
//pause, the most recent call to func should be executed and any others ignored.

//b) Extend the debounce decorator function to take a second argument ms, which defines the
//length of the period of inactivity instead of hardcoding to 1000ms

//c) Extend debounce to allow the original debounced function printMe to take an argument
//msg which is included in the console.log statement.

function printMe() {
    console.log('printing debounced message')
    }
    printMe = debounce(printMe); //create this debounce function for a)
    //fire off 3 calls to printMe within 300ms - only the LAST one should print, after
    //1000ms of no calls
    setTimeout( printMe, 100);
    setTimeout( printMe, 200);
    setTimeout( printMe, 300);



  //a
  function debounce(func) {
    let timeoutId;
    return function() {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, arguments);
        }, 1000);
    };
}

function printMe() {
    console.log('Printing debounced message');
}  

//b
function debounce(func, ms) {
    let timeoutId;
    return function() {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, arguments);
        }, ms);
    };
}

function printMe() {
    console.log('Printing debounced message');
}

printMe = debounce(printMe, 1000);

setTimeout(printMe, 100);
setTimeout(printMe, 200);
setTimeout(printMe, 300);

//c
function debounce(func, ms) {
    let timeoutId;
    return function() {
        clearTimeout(timeoutId);
        const args = arguments;
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, ms);
    };
}

function printMe(msg) {
    console.log(`Printing debounced message: ${msg}`);
}

printMe = debounce(printMe, 1000);

setTimeout(() => printMe('Message 1'), 100);
setTimeout(() => printMe('Message 2'), 200);
setTimeout(() => printMe('Message 3'), 300);


//4. The Fibonacci sequence of numbers is a famous pattern where the next number in the
//sequence is the sum of the previous 2.
//e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.

//a) Write a function printFibonacci() using setInterval that outputs a number in
//the Fibonacci sequence every second.

//b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
//calls to do the same thing

//c) Extend one of the above functions to accept a limit argument, which tells it how many
//numbers to print before stopping.


//a
function printFibonacci(limit) {
    let a = 0;
    let b = 1;
    let counter = 0;

    const intervalId = setInterval(() => {
        console.log(b);
        const temp = a + b;
        a = b;
        b = temp;
        counter++;

        if (limit && counter >= limit) {
            clearInterval(intervalId);
        }
    }, 1000);
}

// Example usage with a limit of 8 Fibonacci numbers
//printFibonacci(8);

//b
function printFibonacciTimeouts(limit) {
    let a = 0;
    let b = 1;
    let counter = 0;

    const fibonacciTimeout = () => {
        console.log(b);
        const temp = a + b;
        a = b;
        b = temp;
        counter++;

        if (limit && counter >= limit) {
            return;
        }

        setTimeout(fibonacciTimeout, 1000);
    };

    fibonacciTimeout();
}

//c
function printFibonacci(limit) {
    let a = 0;
    let b = 1;
    let counter = 0;

    const intervalId = setInterval(() => {
        console.log(b);
        const temp = a + b;
        a = b;
        b = temp;
        counter++;

        if (counter >= limit) {
            clearInterval(intervalId);
        }
    }, 1000);
}

// Example usage to print the first 10 Fibonacci numbers
printFibonacci(10);


//5.The following car object has several properties and a method which uses them to print a
//description. When calling the function normally this works as expected, but using it from
//within setTimeout fails. Why?

let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description() {
    
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
    };
    car.description(); //works
    setTimeout(car.description, 200); //fails

    //a) Fix the setTimeout call by wrapping the call to car.description() inside a
   // function

    //b) Change the year for the car by creating a clone of the original and overriding it
   // c) Does the delayed description() call use the original values or the new values from
    //b)? Why?

    //d) Use bind to fix the description method so that it can be called from within
    //setTimeout without a wrapper function

    //e) Change another property of the car by creating a clone and overriding it, and test that
    //setTimeout still uses the bound value from d)  


    //a
    setTimeout(() => {
        car.description();
    }, 200);

    //b
    let carClone = Object.assign({}, car);
carClone.year = 2022;

//c
//The delayed description() call will use the original values from the car object, 
//not the new values from the clone (carClone). This happens because the setTimeout 
//call doesn't preserve the context (this) of the object when it's executed after 
//the timeout.

//d
let boundDescription = car.description.bind(car);
setTimeout(boundDescription, 200);

//e
let carClone2 = Object.assign({}, car);
carClone2.make = "Ferrari";

setTimeout(boundDescription, 400); // Still uses the bound value from d)

//6. Use the Function prototype to add a new delay(ms) function to all functions, which can
//be used to delay the call to that function by ms milliseconds.
function multiply(a, b) {
    console.log( a * b );
    }
    multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

//a) Use the example multiply function below to test it with, as above, and assume that all
//delayed functions will take two parameters

//b) Use apply to improve your solution so that delayed functions can take any number of
//parameters

//c) Modify multiply to take 4 parameters and multiply all of them, and test that your
//delay prototype function still works.


//a
// Add delay function to the Function prototype
Function.prototype.delay = function(ms) {
    let fn = this; // 'this' refers to the function calling delay
    return function(...args) {
        setTimeout(() => fn.apply(null, args), ms);
    };
};

// Example function: multiply
function multiply(a, b) {
    console.log(a * b);
}

// Test the delay function with multiply
multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

//b
// Add delay function to the Function prototype
Function.prototype.delay = function(ms) {
    let fn = this; // 'this' refers to the function calling delay
    return function(...args) {
        setTimeout(() => fn.apply(null, args), ms);
    };
};

// Example function: multiply
function multiply(a, b) {
    console.log(a * b);
}

// Test the delay function with multiply with any number of parameters
multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds
multiply.delay(1000)(2, 3, 4); // prints 24 after 1000 milliseconds
multiply.delay(1500)(1, 2, 3, 4, 5); // prints 120 after 1500 milliseconds

//c
// Add delay function to the Function prototype
Function.prototype.delay = function(ms) {
    let fn = this; // 'this' refers to the function calling delay
    return function(...args) {
        setTimeout(() => fn.apply(null, args), ms);
    };
};

// Modified multiply function to take 4 parameters and multiply them
function multiply(a, b, c, d) {
    console.log(a * b * c * d);
}

// Test the delay function with modified multiply
multiply.delay(1000)(2, 3, 4, 5); // prints 120 after 1000 milliseconds


//7. In JavaScript, the toString method is used to convert an object to a string representation.
//By default, when an object is converted to a String, it returns a string that looks something
//like [object Object].
//However, we can define our own toString methods for custom objects to provide a more
//meaningful string representation.
//a) Define a custom toString method for the Person object that will format and print
//their details
//b) Test your method by creating 2 different people using the below constructor function
//and printing them
//c) Create a new constructor function Student that uses call to inherit from Person and
//add an extra property cohort
//d) Add a custom toString for Student objects that formats and prints their details. Test
//with 2 students.
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    }
    const person1 = new Person('James Brown', 73, 'male')
    console.log('person1: '+person1) //prints person1: [object Object]
    
//a
// Define the Person constructor function with a custom toString method
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;

    // Custom toString method for Person objects
    this.toString = function() {
        return `${this.name} is ${this.age} years old and is ${this.gender}`;
    };
}

// Create an instance of Person
const Person1 = new Person('James Brown', 73, 'male');

// Test the custom toString method
console.log('person1: ' + person1); // prints person1: James Brown is 73 years old and is male

//b
// Create another instance of Person
const person2 = new Person('Jane Doe', 25, 'female');

// Test the custom toString method with person2
console.log('person2: ' + person2); // prints person2: Jane Doe is 25 years old and is female

//c
// Define the Student constructor function inheriting from Person using call
function Student(name, age, gender, cohort) {
    Person.call(this, name, age, gender); // Call Person constructor with this context
    this.cohort = cohort;
}

// Create an instance of Student
const student1 = new Student('John Smith', 20, 'male', '2022');

// Test the custom toString method for Student
Student.prototype.toString = function() {
    return `${this.name} is a student in cohort ${this.cohort}`;
};

// Test the custom toString method with student1
console.log('student1: ' + student1); // prints student1: John Smith is a student in cohort 2022

//d
// Create another instance of Student
const student2 = new Student('Emma Johnson', 22, 'female', '2023');

// Test the custom toString method with student2
console.log('student2: ' + student2); // prints student2: Emma Johnson is a student in cohort 2023

//8.The following DigitalClock class uses an interval to print the time every second once
//started, until stopped.
class DigitalClock {
    constructor(prefix) {
    this.prefix = prefix;
    }
    display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [date.getHours(), date.getMinutes(),
    date.getSeconds()];
    if (hours < 10) hours = '0' + hours;
    if (mins < 10) mins = '0' + mins;
    if (secs < 10) secs = '0' + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    }
    stop() {
    clearInterval(this.timer);
    }
    start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
    }
    }
    const myClock = new DigitalClock('my clock:')
    myClock.start()

//a) Create a new class PrecisionClock that inherits from DigitalClock and adds the
//parameter precision – the number of ms between 'ticks'. This precision parameter
//should default to 1 second if not supplied.

//b) Create a new class AlarmClock that inherits from DigitalClock and adds the
//parameter wakeupTime in the format hh:mm. When the clock reaches this time, it
//should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should
//default to 07:00 if not supplied.

//a.
// Define the PrecisionClock class inheriting from DigitalClock
class PrecisionClock extends DigitalClock {
    constructor(prefix, precision = 1000) {
        super(prefix); // Call the parent class constructor
        this.precision = precision;
    }

    // Override the start method to use the precision parameter
    start() {
        this.display();
        this.timer = setInterval(() => this.display(), this.precision);
    }
}

// Create an instance of PrecisionClock
const myPrecisionClock = new PrecisionClock('precision clock:', 500); // precision of 500ms
myPrecisionClock.start();

//b
// Define the AlarmClock class inheriting from DigitalClock
class AlarmClock extends DigitalClock {
    constructor(prefix, wakeupTime = '07:00') {
        super(prefix); // Call the parent class constructor
        this.wakeupTime = wakeupTime;
    }

    // Override the start method to include alarm functionality
    start() {
        this.display();
        this.timer = setInterval(() => {
            const date = new Date();
            const currentTime = `${date.getHours()}:${date.getMinutes()}`;
            if (currentTime === this.wakeupTime) {
                console.log('Wake Up!');
                this.stop(); // Stop ticking when the alarm time is reached
            } else {
                this.display(); // Display current time if not alarm time
            }
        }, 1000); // Check every second
    }
}

// Create an instance of AlarmClock with a wakeupTime of 08:30
const myAlarmClock = new AlarmClock('alarm clock:', '08:30');
myAlarmClock.start();


//9. We can delay execution of a function using setTimeout, where we need to provide both
//the callback function and the delay after which it should execute.
//a) Create a promise-based alternative randomDelay() that delays execution for a
//random amount of time (between 1 and 20 seconds) and returns a promise we can use
//via .then(), as in the starter code below
//b) If the random delay is even, consider this a successful delay and resolve the promise,
//and if the random number is odd, consider this a failure and reject it
//c) Update the testing code to catch rejected promises and print a different message
//d) Try to update the then and catch messages to include the random delay value
function randomDelay() {
    // your code
    }
    randomDelay().then(() => console.log('There appears to have been a delay.'));

//a
function randomDelay() {
    return new Promise((resolve) => {
        const delay = Math.floor(Math.random() * 20 + 1) * 1000; // Random delay between 1 and 20 seconds
        setTimeout(() => {
            resolve(delay); // Resolve the promise after the random delay
        }, delay);
    });
}

randomDelay().then((delay) => {
    console.log(`Delayed for ${delay / 1000} seconds.`);
}).catch((error) => {
    console.error('Error:', error);
});

//b
function randomDelay() {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 20 + 1) * 1000; // Random delay between 1 and 20 seconds
        setTimeout(() => {
            if (delay % 2 === 0) {
                resolve(delay); // Resolve the promise for even delays
            } else {
                reject(new Error(`Delay of ${delay / 1000} seconds is odd.`)); // Reject for odd delays
            }
        }, delay);
    });
}

randomDelay()
    .then((delay) => {
        console.log(`Successful delay of ${delay / 1000} seconds.`);
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });

  //c
  function randomDelay() {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 20 + 1) * 1000; // Random delay between 1 and 20 seconds
        setTimeout(() => {
            if (delay % 2 === 0) {
                resolve(delay); // Resolve the promise for even delays
            } else {
                reject(new Error(`Delay of ${delay / 1000} seconds is odd.`)); // Reject for odd delays
            }
        }, delay);
    });
}

randomDelay()
    .then((delay) => {
        console.log(`Successful delay of ${delay / 1000} seconds.`);
    })
    .catch((error) => {
        console.error('Failed delay:', error.message); // Print a different message for rejected promises
    });
    
  //d
  function randomDelay() {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 20 + 1) * 1000; // Random delay between 1 and 20 seconds
        setTimeout(() => {
            if (delay % 2 === 0) {
                resolve(delay); // Resolve the promise for even delays
            } else {
                reject(new Error(`Delay of ${delay / 1000} seconds is odd.`)); // Reject for odd delays
            }
        }, delay);
    });
}

randomDelay()
    .then((delay) => {
        console.log(`Successful delay of ${delay / 1000} seconds.`);
    })
    .catch((error) => {
        console.error(`Failed delay of ${error.delay / 1000} seconds:`, error.message); // Include random delay in catch message
    });  

    //10.Fetch is a browser-based function to send a request and receive a response from a server,
    //which uses promises to handle the asynchronous response.
    //The below fetchURLData uses fetch to check the response for a successful status
    //code, and returns a promise containing the JSON sent by the remote server if successful
    //or an error if it failed. (To run this code in a node.js environment, follow the instructions in
    //the comments before the function.)
    //a) Write a new version of this function using async/await
    //b) Test both functions with valid and invalid URLs
    //c) (Extension) Extend your new function to accept an array of URLs and fetch all of them,
    //using Promise.all to combine the results.  

//run 'npm init' and accept all the defaults
//run 'npm install node-fetch'
//add this line to package.json after line 5: "type": "module",
import fetch from 'node-fetch'
globalThis.fetch = fetch
function fetchURLData(url) {
let fetchPromise = fetch(url).then(response => {
if (response.status === 200) {
return response.json();
} else {
throw new Error(`Request failed with status ${response.status}`);
}

});
return fetchPromise;
}
fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
.then(data => console.log(data))
.catch(error => console.error(error.message));

//a
import fetch from 'node-fetch'; // Import fetch for Node.js environment

async function fetchURLData(url) {
    try {
        const response = await fetch(url);
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error(`Request failed with status ${response.status}`);
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

// Run the fetchURLData function with a valid URL
(async () => {
    try {
        const data = await fetchURLData('https://jsonplaceholder.typicode.com/todos/1');
        console.log(data);
    } catch (error) {
        console.error(error.message);
    }
})();

//b
import fetch from 'node-fetch'; // Import fetch for Node.js environment

async function fetchURLData(url) {
    try {
        const response = await fetch(url);
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error(`Request failed with status ${response.status}`);
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

// Test with valid URL
(async () => {
    try {
        const validData = await fetchURLData('https://jsonplaceholder.typicode.com/todos/1');
        console.log('Valid URL:', validData);
    } catch (error) {
        console.error('Valid URL Error:', error.message);
    }
})();

// Test with invalid URL
(async () => {
    try {
        const invalidData = await fetchURLData('https://example.com/nonexistent');
        console.log('Invalid URL:', invalidData);
    } catch (error) {
        console.error('Invalid URL Error:', error.message);
    }
})();

//c
import fetch from 'node-fetch'; // Import fetch for Node.js environment

async function fetchURLData(urls) {
    try {
        const responses = await Promise.all(
            urls.map(url => fetch(url).then(response => response.json()))
        );
        return responses;
    } catch (error) {
        throw new Error(error.message);
    }
}

// Test with an array of URLs
(async () => {
    const urls = [
        'https://jsonplaceholder.typicode.com/todos/1',
        'https://jsonplaceholder.typicode.com/posts/1'
    ];

    try {
        const data = await fetchURLData(urls);
        console.log('Data from multiple URLs:', data);
    } catch (error) {
        console.error('Error fetching data from multiple URLs:', error.message);
    }
})();