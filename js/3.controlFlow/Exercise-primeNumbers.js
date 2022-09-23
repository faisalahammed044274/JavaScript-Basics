showPrimes(20);

//  Prime (whoose factors are only 1 and itself)
//  Composite

//12 =  1, 2, 3, 4, 6, 12
//can be devided evenly by its factors

//  11 = 1, 11
//  13 = 1, 13

function showPrimes(limits){

    for(let number = 2; number <= limits; number++){
        //2 - current (i)
        let isPrime = true;
        for (let factor = 2; factor < number; factor++ ){
            if (number % factor === 0){
                isPrime = false;
            }
        }
    }
}