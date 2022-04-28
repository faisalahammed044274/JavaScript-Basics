// //===================
// //      Variable
// //===================

// let name = 'Faisal Ahammed';
// console.log(name);

// //Cannot be a reserved keyword
// //Should be meaningful
// //Cannot start with a number (1name)
// //Cannot contain a space or hypen (-)
// //Are Case-sensitive

// let firstName = 'Faisal';
// let lastName = 'Ahammed';
// console.log(firstName.lastName);

// //===================
// //      Constant
// //===================

// const interestRate = 0.3;
// // interestRate = 7;
// console.log(interestRate);

// let interest = 0.3;
// interest = 7;
// console.log(interest);

// //if not reassign then use const or use let for reassign

// //===================
// //  Primitive Types
// //===================

// let myName = 'Setu'; //String Literal
// let age = 30; //Number Literal
// let isApproved = true; //Boolean Literal 
// let myFirstName = undefined; //Undefined Literal
// let selectedColor = null; //NUll Literal

// //Primitives / Value Types
// // String
// // Number
// // Boolean
// // undefined
// // null

// //===================
// //  Dynamic Typing
// //===================

// // Languages = (Static = statically-typed ) & (Dynamic = Dynamically-typed )


// //===================
// //  Objects
// //===================

// let nameS = 'Seyu';
// let ageS = 30;
// let person = {
//     nameS: 'SetuFaisal',
//     ageS : 30
// };

// //Dot Notation
// person.namey = 'Jhon';

// //Bracket Notation
// person ['name'] = 'Mary';


// console.log(person);

//===================
//      Arrays
//===================

let selectedColors = ['Blue','Green','Red','Yellow','Pink'];
selectedColors[2] = "Grey";

// console.log(selectedColors.length);

//===================
//      Functions
//===================

//Performing a task

function greet(firstName, lastName){
    console.log('Hello ' +  firstName + ' ' + lastName);
}

// greet ('Faisal', 'Ahammed');

//Calculating a value

function square(number){
    return number * number;
}

// let number = square(2);
// console.log(number);

console.log(square(2));



