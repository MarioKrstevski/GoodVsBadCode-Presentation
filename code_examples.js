const student = {
    name: 'Mario 😭',
    height: 176,
    profession: 'developer',
    skills: ['procrastinating', 'making bad jokes'],
    age: 23
}

function studentAge(str, age) {
    const ageStr = age > 20 ? 'old' : 'young';
    return `${str[0]}${ageStr} with ${age} years`;
}

// the string itself is the first argument, and then every arguments we specify will be taken in in the order that they appear

// attach it to a template literal and it will parse all of the string segments as array of strings

// used to take one variable and depending on it to return multiple variations of output string

const bio3 = studentAge`This student is ${student.age}`;

console.log(bio3);