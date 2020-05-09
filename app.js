const chalk = require('chalk')
const validator = require('validator');
const getNotes = require('./notes.js');

const command = process.argv[2];

if(command === 'add'){
    console.log('Add')
}