//const abc = require('./utils.js') test test2
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
//console.log(getNotes())
//console.log(chalk.bold.inverse.red('Success!')+ ' '+chalk.red('At last!') );

//yargs.version('1.1.0')

//console.log(yargs.argv)

yargs.command({
    command: 'add',
    describe: 'Shall we add a new note',
    builder: {
        //first property of add command
        title: {
            describe: 'This is the tile to be passed with Add command as --title="test"',
            demandOption: true,
            type: 'string'

        },
        body: {
            describe: 'This is the body of the note to be added as --body="body to add"',
            demandOption: true,
            type: 'string'

        }
    },
    handler: function(argv){
            console.log(chalk.green('Title : '), argv.title)
            console.log(chalk.green('Body : '), argv.body)
            notes.addNote(argv.title, argv.body)
    }
}
)

yargs.command({
    command: 'remove',
    describe: 'Shall we remove a new note',
    builder: {
        //first property of add command
        title: {
            describe: 'This is the tile to be passed with Remove command as --title="test"',
            demandOption: true,
            type: 'string'

        }
        // body: {
        //     describe: 'This is the body of the note to be removed as --body="body to add"',
        //     demandOption: true,
        //     type: 'string'

        // }
    },
    handler: function(argv){
            console.log(chalk.red('Caling the function to Remove a new note!'))
            notes.removeNote(argv.title)
    }
}
)


yargs.command({
    command: 'read',
    describe: 'Shall we read a note titled the one u provide',
    handler: function(argv){
        notes.readNote(argv.title)
    }
}
)

yargs.command({
    command: 'list',
    describe: 'Shall we list all the notes?',
    handler: function(){
            notes.listNotes()
    }
}
)


//this will help parsing the arguments else they will not be printed
yargs.parse()
//console.log(yargs.argv)

