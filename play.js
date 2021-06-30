
const { connect } = require('./client');
const setupInput = require('./input');

console.log("Connecting ...");
connect();  //connect to game server

setupInput(); // setup interface to handle user input from stdin