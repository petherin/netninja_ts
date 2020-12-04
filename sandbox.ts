// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = 'luigi';
age = 30;

// isLoggedIn =25;
isLoggedIn = true;

// arrays
let ninjas: string[] = [];

ninjas.push('shaun');

// union types
let mixed: (string | number | boolean)[] = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);

let uid: string | number;
uid = '123';
uid = 123;
// uid = false;

// objects
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 };
ninjaOne = []; // allowed because array is really an object

let ninjaTwo: {
    name: string,
    age: number,
    beltColour: string
}

ninjaTwo = {
    name: 'mario',
    age: 20,
    beltColour: 'black',
    // skills:[]
}