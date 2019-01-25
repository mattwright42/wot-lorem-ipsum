//Require express and create an express application instance
const express = require('express');
const app = express();

//Require teh express routes defined in router.js
const routes = require('./router');

//Define the hostname and port where the server can be found
const hostname = '127.0.0.1';
const port = 3000;

//Define the directory where static files are found
app.use(express.static('public'));

//Specify the routes to be used for our appplication
app.listen(port, () => {
  //Display server location inofrmation to the console
  console.log(`Server is listening at http://${hostname}:${port}/`);
});
