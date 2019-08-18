# Vue SSR Starter Trans

## To use:

```
$ npm run watch
$ node server.js <port number> `# defaults to 8080`
```

## What it is

A Vue server side rendered web application and special wiring for transitions.


## Usage notes

`Trans` components cannot be at the top level of any page. Vue breaks in all sorts of fun ways when this happens; something about the combination of `slot`s and directly-nested `transition` components causes bugs in both `vue-router` and Vue itself.
