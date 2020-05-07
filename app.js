const notes = require("./notes");

const yargs = require("yargs");
yargs.version("1.1.0");
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.addNotes(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a note from the notes array with the specified title",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.removeNotes(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "Lists all notes",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.listNotes();
  },
});

yargs.command({
  command: "read",
  describe: "Reads a note for a specified title",
  handler: (argv) => {
    notes.readNotes(argv.title);
  },
});

yargs.parse();
