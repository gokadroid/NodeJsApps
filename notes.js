const chalk = require('chalk')
const fs = require('fs')
const getNotes = function(){
    myString = 'Your notes...'
    return myString
}
const addNote = function(title, body){
    const notes = loadNotes()
    
    const duplicateNotes = notes.filter(function (note){
        return note.title === title
    })

    if (duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
    })
    saveNotes(notes)
    console.log('the existing notes with same title: ', duplicateNotes)
    console.log('Added following note: ')
    console.log(chalk.green('Title : '), title)
    console.log(chalk.green('Body : '), body)
    }else {
        console.log(chalk.red.inverse(title), chalk.red.inverse(": Title already taken, below are the details of existing note with the same title!"))
        console.log(duplicateNotes)
    }
     
}
//this function saves the current notes object
const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
//this is a function that loads all the notes, just to avoid overwriting or adding duplicates
const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = JSON.parse(dataBuffer.toString())
        return dataJSON
    }catch(e){
        return []
    }

}
const removeNote = function(title){
    
    const notes = loadNotes()
    
    const notesToKeep = notes.filter(function (note){
        return note.title !== title
    })

    if (notesToKeep.length > 0 && notes.length > notesToKeep.length){
        
    saveNotes(notesToKeep)
    console.log(chalk.inverse.yellow('Earlier notes: '))
    console.log(notes)
    console.log(chalk.inverse.green('Removed following note: '))
    console.log(chalk.green('Title : '), title)
    //console.log(chalk.green('Body : '), body)
    }else {
        console.log(chalk.inverse.red(title, ": Title not found to remove"))
        console.log(chalk.inverse.yellow('Earlier notes: '))
        console.log(notes)
    }
    

    
}

const listNotes = () => {
    const notes = loadNotes()
    if (notes.length > 0) {
        console.log(chalk.green.inverse('Your Notes: '))
        notes.forEach(note => {
            console.log(chalk.green.bold('|------>'), note.title)
            console.log(chalk.green.bold('|'),chalk.blue.bold('            |-->'), note.body)
        });
    }
    
    
     
}

const readNote = (title) => {
    const notes = loadNotes()
    const myNote= notes.find( (note) => note.title === title)
    if (myNote) {
        console.log(chalk.green.inverse('Your Notes: '))
        console.log(chalk.green.bold('|------>'), myNote.title)
        console.log(chalk.green.bold('|'),chalk.blue.bold('            |-->'), myNote.body)
    }else {
            console.log(chalk.green.inverse('No Notes with title: ', title))
    }
        
     
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
