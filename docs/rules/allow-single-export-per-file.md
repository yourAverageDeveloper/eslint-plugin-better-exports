# single-named-export-per-file

Use this rule to allow only one component/variable to be exported out from a file.

## Rule Details

In order to keep things modular, we might sometimes require that every file contain only the code related to one thing and one thing only. Whether it's a component, a plain JS object or a function.

## Examples

Examples of **incorrect** code for this rule:

Inside a file called `MyFile.tsx`, if there's multiple exports from the file, this rule will fail.

```js
export const MyFile1;
export const MyFile2; // multiple exports, throws error!
```

Examples of **correct** code for this rule:

Inside a file called `MyFile.tsx`, export only one thing out which is the component or the variable.

```js
// ...Rest of the code
export const MyFile; // No other export statements in the file, rule passes!
```
