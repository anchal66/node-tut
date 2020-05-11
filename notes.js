const fs =require('fs')
const getNotes = () =>{
    return "Yoir Notes"
}

const addNote =(title,body)=>{
    const notes = loadNotes();
}

const loadNotes = ()=>{
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote
}