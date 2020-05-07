const fs = require("fs");
const chalk = require("chalk");

const addNotes = (title, body) => {
  let newArr = [...loadNotes()];
  const duplicate = newArr.find((note) => note.title === title);

  if (duplicate) {
    console.log(chalk.default.red.bold("Title is already taken"));
    return saveNotes(newArr);
  } else {
    console.log(chalk.default.green.bold("Note added succesfully"));
    return saveNotes([...loadNotes(), { title, body }]);
  }
};
const saveNotes = (notesArr) => {
  const notesString = JSON.stringify(notesArr);
  fs.writeFileSync("notes.json", notesString);
};
const loadNotes = () => {
  try {
    const notesBuffer = fs.readFileSync("notes.json");
    const notesStingify = notesBuffer.toString();
    const notesParse = JSON.parse(notesStingify);
    return notesParse;
  } catch (error) {
    return [];
  }
};
const removeNotes = (title) => {
  const notesBuffer = fs.readFileSync("notes.json");
  const notes = notesBuffer.toString();
  const parsedNotes = JSON.parse(notes);
  const findNote = parsedNotes.find((note) => note.title === title);
  if (findNote) {
    const newNotes = parsedNotes.filter((note) => note.title !== title);

    const stringifiedNotes = JSON.stringify(newNotes);
    fs.writeFileSync("notes.json", stringifiedNotes);
    console.log(chalk.default.green.bold("Note removed successfully"));
  } else {
    console.log(chalk.default.red.bold("No note with that title"));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.default.bold.blue("Your Notes"));
  return notes.forEach((note) => console.log(note.title));
};

const readNotes = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.default.blue.bold(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.default.red.bold("No note with that title"));
  }
};

module.exports = { addNotes, removeNotes, listNotes, readNotes };
