//for
//while
//do while

//for-in
const person = {
    name: 'Faisal',
    age : 30
};

// for (initialExpression,condition, Increment )
for (let key in person)
console.log(key,person[key]);

const colors = ['red', 'green','blue'];

for( let index in colors)
console.log(index, colors[index]);

const Crocodiles = ['Dragonbait','Scylla', 'Rhaegal'];

for (let Crocodile of Crocodiles)
console.log(Crocodile);

// for-in = iterate over the property of an object 

// for-of = iterate Element or an Items For an array