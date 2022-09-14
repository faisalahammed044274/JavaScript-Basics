// Logical ANd (&&)
//Return TRUE if both operands are TRUE

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log("Eligible", eligibleForLoan);

//Logical OR (||)
//Returns TRUE if one of the operands is TRUE

let myHighIncome = false;
let myGoodCreditScore = true;
let myEligibleForLoan = highIncome || goodCreditScore;
console.log("Application Refused", myEligibleForLoan);

//NOT (!)

let applicationRefused = !eligibleForLoan;
console.log(eligibleForLoan);
