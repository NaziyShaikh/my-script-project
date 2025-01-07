

//  Q1: Given an array of numbers, use the map function with an arrow function to square each element of the array.
 //const numbers = [1, 2, 3, 4, 5];
 //const squaredNumbers = numbers.map(num => num * num);
 //console.log(squaredNumbers); 
 // Output: [1, 4, 9, 16, 25]

// Q2: Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators.
// function getGrade(score) {
//     return score >= 90 ? 'A' :
//            score >= 80 ? 'B' :
//            score >= 70 ? 'C' :
//            score >= 60 ? 'D' : 'F';
// }
// console.log(getGrade(85)); // Output: B

// Q3: Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also, use object destructuring to extract and print the car's Model and Year.
// const car = {
//     companyName: 'Toyota',
//     model: 'Camry',
//     year: 2020
// };
// function changeCarYear(newYear) {
//     car.year = newYear;
// }
// changeCarYear(2022);
// const { model, year } = car;
// console.log(`Model: ${model}, Year: ${year}`); // Output: Model: Camry, Year: 2022

// Q4: Given an array of numbers, use the filter function to create a new array containing only the prime numbers.
// const isPrime = (num) => {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// };
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const primeNumbers = numbers.filter(isPrime);
// console.log(primeNumbers); // Output: [2, 3, 5, 7]

// Q5: State different use cases of map, filter, and reduce functions.
// console.log("Use cases:");
// console.log("- map: Transforming an array of objects to an array of specific properties, converting numbers.");
// console.log("- filter: Creating a new array of items that meet certain criteria, removing duplicates.");
// console.log("- reduce: Summing up values, transforming an array into a single object.");

// Q6: Write an asynchronous function using async-await to fetch data from an API (you can use the JSONPlaceholder API) and log the result.
// async function fetchData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }
// fetchData();

// Q7: Define a nested object representing a person with properties like name, address, and contact. Use optional chaining to safely access the person's phone number, even if the contact property is missing.
// const person = {
//     name: 'John Doe',
//     address: {
//         street: '123 Main St',
//         city: 'Anytown'
//     },
//     contact: {
//         email: 'john.doe@example.com'
//         // phone: '123-456-7890' // Uncomment this line to add a phone number
//     }
// };
// const phoneNumber = person.contact?.phone ?? 'Phone number not available';
// console.log(phoneNumber); // Output: Phone number not available