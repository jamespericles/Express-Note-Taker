const express = require("express");
const path = require("path");

// Set up Express app to listen on port 3000
let app = express();
let PORT = 3000;

// Set up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Empty Array for notes
let notes = [];

// Routes
app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// Display notes
app.get("/api/notes", function (req, res) {
  fs.readFile("db/db.json", "utf8", function (err, data) {
    if (err) {
      console.log(err);
      return;
    }

    // check out what the data looks like
    console.log(data);
  });
  return res.json(notes);
});

// Create new note
app.post("/api/notes", function (req, res) {
  console.log(req.body);
  let newNote = req.body;

  notes.push(newNote);

  res.json(newNote);
});

// Starts server to begin listening
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
