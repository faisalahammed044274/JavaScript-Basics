showNumbers(10);
// Method 1
function showNumbers(limit){
    for(let i = 0; i <= limit; i++){
        if (i % 2 === 0) console.log(i,'Even');
    else console.log(i, 'Odd');

// Method 2
    const message = (i % 2 === 0 ) ? "Even Number" : "Odd Number";
    console.log(i, message)

    }
}

