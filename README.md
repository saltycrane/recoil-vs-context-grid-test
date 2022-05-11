# recoil-vs-context-grid-test

This is an attempt to compare performance of a spreadsheet-like grid when using React Context vs. the [Recoil](https://recoiljs.org/) library for state management. It uses Recoil v0.7.2 and React v18.1.0.

## Demo

https://saltycrane.github.io/recoil-vs-context-grid-test/

## Usage (dev mode)

```
$ npm install
$ npm run dev
```

Go to http://localhost:3000 in the browser

## Results (production mode)

Using the [demo page](https://saltycrane.github.io/recoil-vs-context-grid-test/) which uses [production mode](https://reactjs.org/docs/optimizing-performance.html#use-the-production-build), and a grid of 100 x 100 cells, I clicked the "100" cell and pressed the "Up Arrow" key 9 times until the "10" cell was selected. The React Context grid gave 1340ms (3003ms - 1663ms) of non-Idle time during this interaction. The Recoil grid gave 886ms (2901ms - 2035ms) non-Idle time. This is about a 30% advantage for Recoil. The Scripting time was 20X less for Recoil (31ms vs 620ms) while the Rendering time was higher for Recoil (609ms vs 368ms). I'm not sure what this means.

**Context Screenshot (prod mode)**
![context prod screenshot](./img/context-prod-screenshot.png)

**Recoil Screenshot (prod mode)**
![recoil prod screenshot](./img/recoil-prod-screenshot.png)
