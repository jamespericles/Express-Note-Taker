const express = require("express");
const path = require("path");

// Set up Express app to listen on port 3000
let app = express();
let PORT = 3000;

// Set up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Empty Array for notes
let notes = [];

// Routes
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "notes.html"));
});
