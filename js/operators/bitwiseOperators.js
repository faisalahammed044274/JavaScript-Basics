// 1 = 00000001
// 2 = 00000010
// R = 00000011

// console.log(1 | 2); //Bitwise OR
// console.log(1 & 2); //Bitwise And

//Read, Write, Execute
//00000100
//00000010
//00000001

const readPermission = 4;
const writePermisssion = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | writePermisssion;

let message = myPermission & readPermission ? "Yes" : "No";
console.log(message);
