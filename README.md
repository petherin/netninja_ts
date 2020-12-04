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