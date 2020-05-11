const fs =require('fs')
const getNotes = () =>{
    return "Yoir Notes"
}

const addNote =(title,body)=>{
    const notes = loadNotes();
    const dupicateNotes = notes.filter((note)=>{
        return note.title === title
    })

    if(dupicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log("Succesfully Added ", notes)
    }
    else{
        console.log('Note Title Already exists')
    }
    
}

const saveNotes = (notes)=>{
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson)
}

const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    }
    catch(e){
        return [];
    }
}

const removeNote = ()=>{
    const notes = loadNotes();
    const notesToKeep = notes.filter((note)=>{
        return note.title !== title;
    });
    saveNotes(notesToKeep)
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}