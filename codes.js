
// -- Debugging/Console Logging--

const web = { name: 'Snezana', work_floor: 2, nervous: false };
const ios = { name: 'Gordana', work_floor: 3, nervous: false };
const backend = { name: 'Stefan', work_floor: 1, nervous: true };

// Bad

// We can't see the names

console.log(web);
console.log(ios);
console.log(backend);

// Good 

// -- Computed Property Names --
// We pass the variable names to an object

console.log({ web, ios, backend });

// If the objects are from the same type
console.table({ web, ios, backend }); //As an object

console.table([web, ios, backend]); //As an array

console.table(array.map((item) => {
    return {
        property: item.property
    };
})); // to show each specific proerty form an array of objects instad of all of them

// Custom CSS

console.log('%c My colleagues', 'color: green; font-weight: bold;');

// If you are benchmarking performance, we can keep track of time in the console

console.time('loop');

let i = 0;
while (i < 1000000) {
    i++
}

console.timeEnd('loop');

console.timeLog('loop');// to check the time for this timer

// If we need to know where a console log originated from

// important function that deletes items from a database and we don't want to run it twice


const deleteMe = () => console.trace('bye bye database');

deleteMe();
deleteMe();


////////////////

// Make the code as consize and efficient as possible

const Cat = {
    name: 'Tom 😻',
    legs: 4,
    furr: 'fluffy',
    type: 'carnivorous',
    mealsPerDay: 5,
    diet: 'pasteta',
    superCute: true
}

// -- Object Destructuring -- 

// Bad Code, inefficient, the word animal is repeated too much

function feed(animal) {
    return `Feed ${animal.name} ${animal.mealsPerDay} times with ${animal.diet}`;
}

// Good Code


function feed({ name, mealsPerDay, diet }) {
    return `Feed ${name} ${mealsPerDay} times with ${diet}`;
}

// huge benefits wtih bigger function with more arguments

// alternate way if you don't like to do it in the object argument

function feed(animal) {
    const { name, mealsPerDay, diet } = animal;
    return `Feed ${name} ${mealsPerDay} times with ${diet}`;
}

// Template literals

const student = {
    name: 'Mario 😭',
    height: 176,
    profession: 'developer',
    skills: ['procrastinating', 'making bad jokes'],
    age: 23
}

// Bad String Code

let bio = student.name + ' is a ' + student.profession + ' that is efficient in ' + student.skills.join(' & ');

// Good String Code
// more readable and easier to maintain

const { name, profession, skills } = student;
let bio2 = `{name} is a {profession} that is efficient in {skills.join(' & ')}`;

console.log(bio2);

// We can take things a step further

function studentAge(str, age) {
    const ageStr = age > 20 ? 'old' : 'young';
    return `${str[0]}${ageStr} with ${age} years`;
}

// the string itself is the first argument, and then every arguments we specify will be taken in in the order that they appear

// attach it to a template literal and it will parse all of the string segments as array of strings

// used to take one variable and depending on it to return multiple variations of output string

const bio3 = studentAge`This student is ${student.age}`;

console.log(bio3);


// -- Spread Syntax --
// we want to add the stats properties to the pikachu object

const pokemon = { name: 'Pikachu 🐹' };
const stats = { hp: 40, attack: 60, defense: 70 }

// Bad Object Code 
// one way is to redefine them one by one on the original pokemon object

// this is verbose and also we are mutating the original object, when we most likely want to create a new immutable object

pokemon['hp'] = stats.hp;
pokemon['attack'] = stats.attack;
pokemon['defense'] = stats.defense;

// our pokemon levels up over time and we want to each lvlUp as its own object 

// with object.assign we take the original object and merge it with the stats and it will merge them together from left to right or just choose one property to update

const lvl0 = Object.assign(pokemon, stats);
const lvl1 = Object.assign(pokemon, { hp: 35 });

// this isnt too bad but there is more consise way to do this with the spread syntax

const lvl0 = { ...pokemon, ...stats };
const lvl1 = { ...pikachu, hp: 45 };

// this is syntactix sugar that makes the code more readible and easier to maintain

// SPREAD on Arrays

let team7 = ['Naruto', 'Sakura', 'Sasuke'];

// Bad Old School Way

team7.push('Sai');
team7.push('Boruto');
team7.push('Sarada');
team7.push('Mitsuki');

team7.push('Boruto', 'Sarada', 'Mitsuki');
team7.unshift('Boruto', 'Sarada', 'Mitsuki');

// New Way, has same effect as Push or Unshift

team7 = [...team7, 'Boruto', 'Sarada', 'Mitsuki'];

team7 = ['Boruto', 'Sarada', 'Mitsuki', ...team7,];

team7 = ['Boruto', 'Sarada', ...team7, 'Mitsuki',]; // the last comma doesnt break your code

// LOOPS

// lets say our team orders food and we need to calculate total and some other things from them 

const orders = [140, 100, 120, 80, 210];

// Bad Code, its ugly and its mutating and can make our code a little unpredictable

const total = 0;
const withTax = [];
const highValue = [];

for (let i = 0; i < orders.length; i++) {

    // Reduce
    total += orders[i];

    // Map
    withTax.push(orders[i] * 1.18);

    // Filter
    if (orders[i] > 100) {
        highValue.push(orders[i]);
    }

}


// Good Code

// it takes a callback function as an argument wher the fisrt arg is the accumulated value that gets returned and the second argument is the current value in the loop 

// Reduce
const total = orders.reduce((acc, curr) => acc + curr);

// Map

const withTax = orders.map(v => v * 1.18);

// Filter

const highValue = orders.filter(v => v > 100);


// ASYNC AWAIT 

// lets create a method that returns a promise that returnes a random number asynchronously

const random = () => {
    return Promise.resolve(Math.random());
}

// Goal : we want to retrieve 3 random numbers asyncrinously and add them at the end

// Bad Code

const sumRandomAsyncNums = () => {
    let first;
    let second;
    let third;

    return random()
        .then(v => {
            fisrt = v;
            return random();
        })
        .then(v => {
            second = v;
            return random();
        })
        .then(v => {
            third = v;
            return first + second + third;
        })
        .then(v => console.log(`Result ${v}`));
}
// async await allows us to express assyncrnous code in a synchronous format

// the async keyword forces it to return a promise

const sumRandomAsyncNums1 = async () => {

    const first = await random();
    const second = await random();
    const third = await random();

    console.log(`Result ${first + second + third}`);

}



let myArr = [1, 2, 3, 4];

myArr[69] = 69; //this will create undefined values for elements up to the 69 postiion

myArr[2.5] = 7;
myArr[-7] = 7;
myArr['foo'] = 'bar';
// these three will be added as properties of the array and wont be able to be looped over
console.dir(myArr);

// if our array is with lenghth 4 and we say

myArr.length = 2;// the first 2 elements will be there others will be gone
myArr.length = 22;// another 20 undefined elements will be created;

myArr.forEach(function (element, index, array) {
    console.log(element);
    console.log(index);
    console.log(array);

})

myArr.map(function (element, index, array) {
    return element * element;
})

myArr.filter(function (element, index, array) {
    return element > 20;
})
myArr.some(function (element, index, array) {
    return element > 20;// true if at least one item is >20
})
myArr.every(function (element, index, array) {
    return element > 20;// true if all elements are >20
})

myArr.reduce(function (sum, element, index, array) {
    return sum + element;
}, 100) // the 100 is an aditional thing to add

["String", 0, "Another one", "", false].filter(Boolean);

Console.dir()

//Displays an interactive listing of the properties of a specified JavaScript object.This listing lets you use disclosure triangles to examine the contents of child objects. Usefull for HTML tags

console.error(); //shows stuff as an error
console.warn(); // shows stuff as a warning( yellow)

console.count('unique string'); // will keep a counter for this thing; ako imam nesto sto treba da broime kolku pati se pecati, da ne broime tuku moze da staime count i ono ke broi za nas

console.group();
console.groupEnd();

// if you have a lot of logs and you want to organize so that visuall its easier to spot. 

console.log("Hello , %s. Your number is %i", 'Mario', 8);
/// (% s = string, % i = integer, % o = object, % f = float)

