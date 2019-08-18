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

Use the `trans` component (`src/component/trans/Index.vue`) to trigger some sort of animation every time a page leaves or enters. Define the animation in whatever parent component uses `trans` based on the currently-active global default transition object, a per-route transition object (set using `trans-link`), or a hardcoded string.

### `trans` component

Settings, passed as props, include

* name: String
  The name of the transition itself, used to hook into CSS
* delay: Number or object of the form `{leave: number, enter: number}`
  The delay the transition should experience, useful for staggering. 
* initOnly: Boolean
  Flag to trigger the transition on initial page load (not on first-ever route navigation). This is useful for layout components that you don't necessarily want animating more than once, like the sitewide header.

All are optional. If a `name` isn't set, it reverts to the `transDefault` in the Vuex store. The `delay` defaults to 0. The `initOnly` flag defaults to `false`.

### Transition objects

Super simple:

```
const myTrans = {
  name: string,
  duration: { leave: number, enter: number } | number
}
```

Default transitions can be set using the `initialize` Vuex action in the mounted hook of the highest-level parent (here App.vue). The current transition can as well, but it resets to *default* on every page change.


## Caveats

`Trans` components cannot be at the top level of any page. Vue breaks in all sorts of fun ways when this happens; something about the combination of `slot`s and directly-nested `transition` components causes bugs in both `vue-router` and Vue itself.
