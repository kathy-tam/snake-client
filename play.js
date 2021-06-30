
const { connect } = require('./client');
const setupInput = require('./input');

console.log("Connecting ...");
const connection = connect();  //connect to game server

setupInput(connection); // setup interface to handle user input from stdin