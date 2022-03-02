# Text-Editor
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A text editor app that runs in the browser and meets the Progressive Web App (PWA) criteria. It includes a couple of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline.

<br>


## GIF of Application

<img src="Images\Text-Editor.gif" title="Text Editor gif" width = 432px>

<br>


## Links


[Deployed App on Heroku](https://pure-chamber-15361.herokuapp.com/)

<br>

[GIF of Application](https://drive.google.com/file/d/1JcmvHDmYU6WjGITv-FaK7d9HGSF34AQG/view)

<br>

[Github Repository](https://github.com/elliotpark410/Text-Editor)

<br>


## Table of Contents
  * [Getting Started](#getting-started)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Technologies Used](#technologies-used)
  * [Contribution Guidelines](#contribution-guidelines)
  * [Cloning Guidelines](#cloning-guidelines)
  * [Code Snippets](#code-snippets)
  * [Learning Points](#learning-points)
  * [Authors](#authors)
  * [License and Acknowledgements](#license-and-acknowledgements)
  * [Contact](#Contact)

<br>


## Getting Started

To begin the application, use the following in command line:

`
npm run start
`

Next, you can enter [http://localhost:3000/](http://localhost:3000/) in the browser of your choice

<br>


## Installation

To run this application, you will need Node and other dependencies: 

1. You will need to install Node.js. Here is a link below:

[Download Node](https://nodejs.org/en/download/)

<br>

2. Once you have downloaded Node.js, you will want to download node package manager (npm). In command line, you can enter:

`npm install -g npm
`

<br>

3. Next, clone the repository and install all the dependencies in the package.json. In command line, you can enter:

`npm install 
`

<br>


## Usage

To run this application, click on [Deployed App on Heroku](https://pure-chamber-15361.herokuapp.com/). Additionally, there is an "install" button in the app which will allow you to use the app while offline

<br>


<!-- ## Prerequisites
Requires node.js, npm inquirer, and npm jest (optional)

<br> -->


<!-- ## Test-Instructions

To test the API, I recommend downloading [Insomnia's API Platform](https://insomnia.rest/) and enter the following in Insomnia's URL:

>GET http://localhost:3000/api/notes

<br>

>POST http://localhost:3000/api/notes

Example POST body: 
```bash
{
  "title":"Notes Title",
  "text":"notes text content"
}
```
*id is automatically generated so you do not need to enter id

<br>
<br>

>DELETE http://localhost:3000/api/notes/:id

<br>

Example DELETE: The API request below will delete note with id = "1"
>DELETE http://localhost:3000/api/notes/1

<br> -->


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


## Contribution Guidelines
To contribute, please follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

<br>


## Cloning Guidelines

To install this code, please use [Github's guidlines to clone the repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

<br>

Github repository:
>https://github.com/elliotpark410/Text-Editor

<br>


<!-- ## Screenshot

Insomnia: Get Route request to retrieve All Users with Thoughts and Reactions
<img src="Images\Insomnia - My Collection – Get All Users.png" title="All Users with Thoughts and Reactions screenshot" width = 800px>

<br>
<br> -->


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


## Authors
 **1. Elliot Park** 

[Github](https://github.com/elliotpark410)
<br>

[LinkedIn](https://www.linkedin.com/in/elliot-park/)

<br>


## License and Acknowledgements

This project is licensed under the MIT license via UC Berkeley's Extension Program

<br>

Big acknowledgements and thank you to Jerome Chenette, Manuel Nunes, Vince Lee, and Hannah Folk for their support and guidance!

<br>


## Contact
If you'd like to learn more about my projects, check out my Github profile: [https://github.com/elliotpark410](https://github.com/elliotpark410)

<br>

If you have any questions, please don't hesitate to email me at [elliotpark410@gmail.com](mailto:elliotpark410@gmail.com)

<br>
Copyright (c) 2022 Elliot Park



 
  

 



 



