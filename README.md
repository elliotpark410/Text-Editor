# Text-Editor
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A text editor app that runs in the browser and meets the Progressive Web App (PWA) criteria. It includes a couple of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline.

<br>

<img src="Images\Text-Editor.gif" title="Text Editor gif" width = 432px>


[Link to GIF](https://drive.google.com/file/d/1JcmvHDmYU6WjGITv-FaK7d9HGSF34AQG/view)

<br>

## Table of Contents
  * [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Technologies Used](#technologies-used)
  * [Code Snippets](#code-snippets)
  * [Learning Points](#learning-points)
  * [Author](#author)

<br>


## Getting Started

To begin the application, use the following in command line:

`
npm run start
`

Next, you can enter [http://localhost:3000/](http://localhost:3000/) in the browser of your choice

<br>


## Prerequisites

1. [Download Node](https://nodejs.org/en/download/)

<br>

2. Install node package manager (npm)

`npm install -g npm
`

<br>

3. Installdependencies in package.json

`npm install 
`

<br>

## Technologies Used

* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Node.js](https://nodejs.org/en/) 
* [IndexedDB](https://www.npmjs.com/package/idb) 
* [Webpack](https://www.npmjs.com/package/webpack) 
* [Webpack-CLI](https://www.npmjs.com/package/webpack-cli)
* [Webpack PWA Manifest](https://www.npmjs.com/package/webpack-pwa-manifest)
* [Workbox Webpack Plugin](https://www.npmjs.com/package/workbox-webpack-plugin)
* [HTML Webpack Plugin](https://www.npmjs.com/package/html-webpack-plugin)


<br>

## Code Snippets

This code snippet shows how you set up IndexedDB for data persistence 

* Indexed Database API is a JavaScript application programming interface provided by web browsers for managing a NoSQL database of JSON objects

* Import the 'idb' package to use with IndexedDB.

* Create a function that can be used to start up the database

`
const initdb = async () =>
`

* Create a database named 'jate' and we will use version 1

`
openDB('jate', 1, {
`

* Sets the database schema if it isn't already defined with 

`
upgrade(db)
`

* Create an object store for our data inside of 'jate' db and a key named 'id' which will automatically be incremented

`
db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
`

```
import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });
```

 <br>


## Learning Points

* How to deploy app to Heroku

* How to use IndexedDB for data persistence

* How to use Webpack (aka module bundler) to compile JavaScript modules 

* How to create a service worker to allow apps to continue functioning offline 


<br>


## Author
 **1. Elliot Park** 

[Github](https://github.com/elliotpark410)

<br>

[LinkedIn](https://www.linkedin.com/in/elliot-park/)

<br>

[Email](mailto:elliotpark410@gmail.com)

<br>




 
  

 



 



