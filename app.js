const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

yargs.command({
    command: 'add',
    describe: 'Add new Note',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv)=>{
        notes.addNote(argv.title, argv.body)
    }
});
