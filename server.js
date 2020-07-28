const express = require("express");
const path = require("path");
const fs = require("fs");

// Set up Express app to listen on port 3000
let app = express();
let PORT = 3000;

// Set up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
let notes = require("./db/db.json");
// console.log("Notes: ", notes);

// Routes
app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

// Display notes
app.get("/api/notes", function (req, res) {
  fs.readFile("db/db.json", "utf8", function (err, data) {
    if (err) {
      console.log(err);
      return;
    }
    res.send(notes);
  });
});

// Starts server to begin listening
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

// Create new note
app.post("/api/notes", function (req, res) {
  let randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  let id = randLetter + Date.now();
  let newNote = {
    id: id,
    title: req.body.title,
    text: req.body.text,
  };
  console.log(typeof notes);
  notes.push(newNote);
  const stringifyNote = JSON.stringify(newNote);
  res.json(stringifyNote);
  fs.writeFile("db/db.json", stringifyNote, (err) => {
    if (err) console.log(err);
    else {
      console.log("Note successfully saved to db.json");
    }
  });
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// }
// // fs.readFile and set a variable for all of your notes with the data returned like  `var something = JSON.parse(data)`
// // push your newly created notes to the array you just created
//     notes.push(newNote);
// //then fs.writeFile and res.send(notes)
//     res.json(newNote);
// });
