# exact-case-match

Use this rule to match the name and casing of a file exactly with what&#39;s being exported out of it.

## Rule Details

If the name of the file is `MyFile.tsx`, this rule will enforce that the stuff being exported out of this file should be named `MyFile` which is the same as the name of the file.

## Examples

Examples of **incorrect** code for this rule:

Inside a file called `MyFile.tsx`:

```js
export const WronglyNamedMyFile;
```



Examples of **correct** code for this rule:

Inside a file called `MyFile.tsx`:

```js
export const MyFile; // Same as the file name without the extension
```
