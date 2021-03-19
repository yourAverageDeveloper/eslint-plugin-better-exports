# eslint-plugin-better-exports

An ESLint plugin for writing better exports. If you're a fan of ES modules (named exports to be specific), this plugin is for you.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i -D eslint

$ yarn add -D eslint
```

Next, install `eslint-plugin-better-exports`:

```
$ npm i -D eslint-plugin-better-exports 

$ yarn add -D eslint-plugin-better-exports
```


## Usage

Add `better-exports` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": [
    "better-exports"
  ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "better-exports/rule-name": 2
  }
}
```

## Supported Rules

* [exact-case-match](https://github.com/yourAverageDeveloper/eslint-plugin-better-exports/blob/master/docs/rules/exact-case-match.md)
  - Matches the name of the file exactly with what's being exported out of it. If the name of the file is `MyFile.tsx`, the component being exported out should also be named `MyFile`. 

* [single-named-export-per-file](https://github.com/yourAverageDeveloper/eslint-plugin-better-exports/blob/master/docs/rules/single-named-export-per-file.md)
  - Checks if there's only one thing being exported out of a file.





