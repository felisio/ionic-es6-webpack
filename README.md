# Ionic ES6 Webpack


> Template [Ionic sidemenu](http://ionicframework.com/getting-started/) using [ES6](https://github.com/lukehoban/es6features#readme) + [Webpack](https://webpack.github.io/) + [NG6](https://github.com/AngularClass/NG6-starter)


[pt-version](https://github.com/felisio/ionic-es6-webpack/blob/master/README-pt.md)

This repository makes a initial project on ionic sidemenu template, adapted and based on the project NG6-starter, to be written in Angular.js using the ES6, Webpack, Babel and Gulp.
The main modifications made to execute an Ionic project will be described below. For more information, access NG6-starter project Official Document.


## Getting Started

#### Installation:


+ [Node](https://nodejs.org/en/)
+ [Ionic](http://ionicframework.com/)
+ [Webpack](https://webpack.github.io/)
+ [Babel](https://babeljs.io/)


```sh

# Clone this repository
$ https://github.com/felisio/ionic-es6-webpack.git newProject && cd newProject

# Install dependencies
$ npm install

# Run project
$ gulp
```

## Component

Based on NG6-starter component generator, but modified to generate components for Ionic. Easy to create, simply execute a gulp task to create a component inside the folder www/app/components, thus generating the structure below:

```sh
  componentName/
    |__ componentName.component.html  # File containing the HTMLs of your module.
    |__ componentName.component.js    # Directive responsible of matching `controller` and `view`
    |__ componentName.controller.js   # Directive`s controller
    |__ componentName.factory.js # Resource to execute services
    |__ componentName.html # HTML file that loads Ionic components and of `view` components
    |__ componentName.js # Creation of angular module for dispatch
    |__ componentName.spec.js # Test demos
```

## Code generator

Execute the command on your terminal

```sh
# Generator
gulp component --name componentName
```
