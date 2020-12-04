# Net Ninja TypeScript Tutorial

This is me working through the TypeScript tutorials at https://www.youtube.com/watch?v=2pZmKW9-I_k&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI.

Source code: https://github.com/iamshaunjp/typescript-tutorial

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