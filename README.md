# Vue SSR Starter Trans

## To use:

```
$ npm i
$ npm run watch  `#(or "npm run build")`
$ node server.js <port number> `# defaults to 8080`
```

## What it is

A Vue server side rendered web application and special wiring for transitions.

## Basic usage

Use the `trans` component (`src/component/trans/Index.vue`) to trigger some sort of animation every time a page leaves or enters. Define the animation in whatever parent component uses `trans` based on the currently-active global default transition name, a per-route transition (set using `trans-link`), or a hardcoded string.

## Caveats

`Trans` components cannot be at the top level of any page. Vue breaks in all sorts of fun ways when this happens; something about the combination of `slot`s and directly-nested `transition` components causes bugs in both `vue-router` and Vue itself.
