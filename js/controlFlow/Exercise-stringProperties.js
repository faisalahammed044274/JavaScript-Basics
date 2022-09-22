const movie = {
    title : 'a',
    releaseYear : 2022,
    rating : 4.5,
    director :'b',
    Profitable : true,
};

showProperties(movie);

function showProperties(obj){
    for (let key in obj)
    // console.log(key);
    if (typeof obj [key] === 'string') //string, number, boolean
    console.log(key, obj[key]);
}