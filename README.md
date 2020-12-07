# Net Ninja TypeScript Tutorial

This is me working through the TypeScript tutorials at https://www.youtube.com/watch?v=2pZmKW9-I_k&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI.

Source code: https://github.com/iamshaunjp/typescript-tutorial

 > General JavaScript note: When selecting by class, prefix with `.` e.g. `document.querySelector('.new-item-form')`. When selecting by ID, prefix with `#` e.g. `document.querySelector('#type')`.
 
## Tutorial 1 Notes

Install Node to get npm.

Install TypeScript using npm: `npm install -g typescript`

## Tutorial 2 Notes

To compile TypeScript into JavaScript use:

`tsc sandbox.ts sandbox.js`

If you want the generated JavaScript to have the same name as the TypeScript, just do:

`tsc sandbox.ts`

To do automatic compiling on TypeScript file saves:

`tsc sandbox.ts -w`

## Tutorial 5 Notes
If you declare an array but don't give it in initial value, you can't then push to it.

```
let ninjas: string[];
ninjas.push('shaun');
```

This won't report an error in the IDE and the JavaScript will be generated, but you'll see this in the browser console:

```
sandbox.js:11 Uncaught TypeError: Cannot read property 'push' of undefined
    at sandbox.js:11
```

Best to give it an initial value of an empty array:

```
let ninjas: string[] = [];
```

## Tutorial 6 Notes

`any` basically reverts back to the typeless JavaScript, so think twice about using it, as it gets rid of the benefits of TypeScript.

However, it can be useful in certain situations.

## Tutorial 7 Notes
A better way of organising files is to have a `public` folder that will be deployed to a server.

And a `src` folder that will be the TypeScript which we won't deploy - it'll be converted to JavaScript under `public`.

`tsc` won't work well with a new folder structure so create some `tsconfig` instead.

To initialise a `tsconfig.json` file, use:

```
tsc --init
```

If we set these items in `tsconfig`, we're telling `tsc` where the source is and where to save the output.

```
    "outDir": "./public",   
    "rootDir": "./src",  
```

Running `tsc -w` will watch for file changes and generate JavaScript in `public` from our TypeScript in `src`.

If you create a `.ts` file in the root folder, `tsc` will see it and create a corresponding `.js` file in `public`. We set `rootDir` config item to `./src`, but it is still looking outside that folder and finding our new `.ts` file. We want to restrict it to just `src`.

To do this, add the following onto the end of `tsconfig.json`.

```
  "include": ["src"]
```  

## Tutorial 8 Notes
Functions return types are inferred so you don't have to add a return type.

However, it makes things more readable.

If a function doesn't return anything, then the inferred return type is `void`, which signifies a lack of return value.

In JavaScript, `void` becomes `undefined`.

## Tutorial 11 Notes
When selecting HTML elements, TypeScript doesn't know at design time whether the element actually exists. It has no view of the DOM at design time.

So for safety we can check if a selected element exists in an IF statement, e.g.

```
const anchor = document.querySelector('a');
if(anchor){
    console.log(anchor.href);    
}
 ```

 If you're sure the element exists, add `!` at the end of the selector line. This is saying I am sure the element exists, so don't show a warning.

 TypeScript has its own types for DOM elements so offers IntelliSense for all the fields on an element. But this only works if you use an HTML element like `a` or `form` in the `querySelector`.

 If you select an element using a class, TypeScript does not offer IntelliSense because the class could be applied to any HTML element and TypeScript doesn't know what it is. For instance, all you get from the following code is `Element`, rather than `HTMLAnchorElement` or `HTMLFormElement`.

 ```
 const form = document.querySelector('.new-item-form')!;
 ```

 To get round this, use:

 ```
 const form = document.querySelector('.new-item-form') as HTMLFormElement;
 ```

 This casts the returned element to the specified type. Note the `!` has been removed.

 To add an event to an element, do this:

 ```
 form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

   // do something
})
```

 It's almost the same to how it's done in JavaScript, except the `e` event is of type `Event`. `e.preventDefault()` stops the default event behaviour so we can define our own.

 By default, numbers in input field are turned into strings by JavaScript. To make it a number, use `valueAsNumber` as opposed to `value` in TypeScript:

 ```
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
 ```

 ## Tutorial 13 Notes

 By default all properties on classes are `public`.

 Prefix fields with `private` to stop them being modified from outside the class.

 Prefix with `readonly` to stop the field being modified from both outside and inside the class.

 A better way of defining fields in a class is to do so in the constructor.

 So this:

 ```
    readonly client: string;
    private details: string;
    public amount: number;
 ```

 Can be deleted and the constructor changed to this:

 ```
    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ) { }
 ```

 This will only work if you use access modifiers on the parameters.

 ## Tutorial 14 Notes
The ES6 module system lets us import code from other files.

To use the ES6 module system, we need to compile down to a version of JavaScript that modern browsers will understand.

In `tsconfig`, if we set `"module": "es2015",`, this tells TypeScript to use the regular 2015 ECMAScript specification for modules, i.e. the regular JavaScript version.

`"target": "es6",` changes the output to ECMAScript6 which targets modern browsers.

In the HTML link to the JS file, add `type="module"` to tell the browser we're using modules, e.g.

```
<script type="module" src='app.js'></script>
```

Export what you want to use in another file using `export`, e.g.

```
export class Invoice {
    ...
}
```

`import` in another file:

```
import { Invoice } from './classes/Invoice.js';
```

Drawbacks to the module system

* Older browsers don't support it
* If you have multiple TypeScript files, you will have the same number of JavaScript files, so each file will need to go over the network.

If we had WebPack this could squash the files into a single file and support older browsers.

Net Ninja video course on this is here: https://www.youtube.com/watch?v=sOUhEJeJ-kI


## Tutorial 15 Notes

For an object to comply to an interface, it must have all the fields and methods. It cannot have extra ones.

# Tutorial 17 Notes

This tutorial adds HTML when a new invoice/payment is added.

Makes use of `document.createElement()` to build up HTML.

There's already a `ul` with class `item-list` in the HTML:

```
<ul class="item-list">
```

This is where new items will be displayed

The `ul` is selected with `querySelector` and passed to a new instance of a class that has a `render` method. This takes an invoice or payment object and creates `li` elements to add to the `ul`.

`render` is called when a form is submitted.

# Tutorial 18 Notes

## Generics

```
const addUID = <T>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
}

let docOne = addUID({ name: 'yoshi', age: 40 });
console.log(docOne.name);
```

Adding `<T>` will record the object passed into `addUID` so that it knows what fields are on it. This means we get IntelliSense for `docOne`'s fields.

At the moment `addUID` takes any type, so you could do:

```
let docTwo = addUID('myname');
```

This would add the `uid` field onto a string, which doesn't make any sense. It only makes sense if we pass an object. To enforce this, add `extends object`:

```
const addUID = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
}
```

This stops us passing anything other than an `object` to `addUID`.

We can be more specific on the type of object, e.g

```
const addUID = <T extends {name: string}>(obj: T) => {
```

So the passed object must have a `name` field of type `string`. It can also have other fields, but the minimum requirement is the `name: string` field specified.

## Generics in Interfaces

If you don't know the type of a field in the interface because it could be any number of things, you can use generics.

```
interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
}
```

This lets you decide the type of the `data` field when you create an object of type `Resource`:

```
const docThree: Resource<string> = {
    uid: 1,
    resourceName: 'person',
    data: 'shaun'
}
```

or

```
const docFour: Resource<{ name: string }> = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'shaun' }
}
```

or

```
const docFour: Resource<string[]> = {
    uid: 1,
    resourceName: 'person',
    data: ['bread', 'milk', 'toilet roll']
}
```