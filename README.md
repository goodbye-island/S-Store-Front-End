# S-Store-Front-End

The pretty web based front end for S-Store

## Setup

* Download
* Install NodeJS/NPM
* Run `npm install -g typescript typings`
* Run `npm link typescript`
* Run `typings install`
* run `npm install`
* run `npm start` to launch local server at port `8080`

## General Info

The project is written primarily in Typescript a superset of JavaScript which adds strong typing. It also uses some syntax, especially classes and arrow functions from ES 6 the next version of JavaScript which is not yet fully supported in browsers. The code is compiled into normal vanila JS, however, so it shouldn't matter. 

For the view layer the website uses React.js an open source JS library from Facebook designed to make it easy to build interactive web apps. This library allows us to easily fetch and present new information to the user without a refresh. Data is stored using a Redux another JS library designed to ease the process of storing app wide information. Currently we never forget anything once we all told it.

For both of these libraries you should follow their tutorials to gain an understanding of how they work.

### File Structure

Here is a list of everything in the project currently at the top level that is not automatically generated

* src
  * components: Lower level view components for the site
  * control: Logic to save and fetch info from the API
  * pages: All the top level pages. From here they import other React components
  * config.ts: The configuration for the file. Right now just the API url
  * index.tsx: The main JS file. Initializes React and imports all the other files. Also sets up routing
* logo.svg: The current logo. Still uses the old name.
* style.css: The single style sheet for the project. Some style is also set inline
* index.html: The file that is actually served to the user. All other source code is loaded from here. Include libraries and set title
