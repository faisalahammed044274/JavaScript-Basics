// const isActive = true;
// const name = ''; //Falsy Value ( False )
// // const name = 'Setu'; Truthy Value (True)
// if (name) console.log('Hello');

// function countTruthy(array){

// }

const array = [1,2,3];

console.log(countTruthy(array));
// Falsy
// Undefined
// null
// ''
// false
// 0
// NaN

// function countTruthy(array){
//     let count = 0;
//     for (let value of array)
//     if(value !== false || value !== undefined)
//     count ++;
//     return count;
// }

function countTruthy(array){
    let count = 0;
    for (let value of array)
    if(value)
    count ++;
    return count;
}