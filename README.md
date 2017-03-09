# vue-bookblock

> A lightweight directive for booklet-like component using codrops/BookBlock

## Installation
NPM
```
npm install vue-bookblock
```

Setup
```
import Vue from 'vue'
import BookBlock from 'vue-bookblock'

Vue.use(BookBlock)
```

## Options
```
{
  // page to start on
  startPage: 1,

  // vertical or horizontal flip
  orientation: 'vertical',

  // ltr (left to right) or rtl (right to left)
  direction: 'ltr',

  // speed for the flip transition in ms
  speed: 1000,

  // easing for the flip transition
  easing: 'ease-in-out',

  // if set to true, both the flipping page and the sides will have an overlay to simulate shadows
  shadows: true,

  // opacity value for the "shadow" on both sides (when the flipping page is over it)
  // value : 0.1 - 1
  shadowSides: 0.2,

  // opacity value for the "shadow" on the flipping page (while it is flipping)
  // value : 0.1 - 1
  shadowFlip: 0.1,

  // if we should show the first item after reaching the end
  circular: false,

  // if we want to specify a selector that triggers the next() function. example: ´#bb-nav-next´
  nextEl: '',

  // if we want to specify a selector that triggers the prev() function
  prevEl: '',

  // autoplay. If true it overwrites the circular option to true
  autoplay: false,

  // page selector using upon initialize
  itemSelector: '.bb-item',

  // time (ms) between page switch, if autoplay is true
  interval: 3000,

  // 3d perspective
  perspective: 1200,

  // callback after the flip transition
  // old is the index of the previous item
  // page is the current item´s index
  // isLimit is true if the current page is the last one (or the first one)
  onEndFlip: function (old, page, isLimit) {
    return false;
  },

  // callback before the flip transition
  // page is the current item´s index
  onBeforeFlip: function (page) {
    return false;
  }
}
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

Inspired by [vue-sortable](https://github.com/sagalbot/vue-sortable)

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
