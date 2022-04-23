const fs = require('fs');
const uuid = require(`uuid`);
const util = require(`util`);
const readTheFile = util.promisify(fs.readFile);
const writeTheFile = util.promisify(fs.writeFile);

// need to add a uuid which is a npm module that generates identifiers. need to add a class store. which is going to read the db .json file. data  and your going to have a write and your going to call to get notes add notes and remove. will also need a util.promisify which per my tutor returns a promise instead of a callback statement and I will also need a stringify statement. 
function main() {
    const uniqueId = uuidv4();
    console.log(uniqueId);
}
// when I envoke the main function it causes the app to get an undefined error and I need to figure that out. 

class dbStore 
{
    read() {
        return readTheFile("db.json", "utf8")
    }
    write(note) {
        return writeTheFile("db.json", JSON.stringify(note))
    }

    addNote(note) {
        const { title, text } = note

        if (!title || !text) {
            throw new Error("Please input text")
        }

        const newNote = { title, text, id: uuid() }

        return this.getNotes()
            .then(notes => [...notes, newNote])
            .then(updatedNotes => this.write(updatedNotes))
            .then(() => this.newNote)
    }

    getNotes() {
        return this.read()
            .then(notes => {
                return JSON.parse(notes) || [];
            })
    }
    removeNote(id) {
        return this.getNotes()
            .then(notes => notes.filter(note => note.id !== id))
            .then(keptNotes => this.write(keptNotes))
    }
}







module.exports = new dbStore();