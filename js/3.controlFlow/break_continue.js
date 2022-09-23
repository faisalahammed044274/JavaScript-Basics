// let i = 0;
// while (i <= 10){
// if (i === 5) break;
// console.log(i);
// i++;
// }

// Avoid continue because it an ugly way of code.

let i = 0;
while (i <= 10){
if (i % 2 === 0){
    i++;
    continue;
}
console.log(i);
i++;
}