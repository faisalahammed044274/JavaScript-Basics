// Hour
//If hour is between 6pm and 12 pm : Good Morning !
//If it is between 12pm and  6pm : good afternoon !
//Otherwise : Good evening!

let hour = 21;
if (hour >= 6 && hour < 12) {
  console.log("Good Morning");
} else if (hour >= 12 && hour < 16) {
  console.log("Good Afternoon");
} else if (hour >= 16 && hour < 19) {
  console.log("Good Evening");
} else {
  console.log("Good Night");
}

// if (condition) {
//   statement;
// } else if (anotherCondition) {
//   statement;
// } else if (yetAnotherCondition) {
//   statement;
// } else statement;
