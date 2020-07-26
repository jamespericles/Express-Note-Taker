Primary Goals;

- create notes
- save notes to backend using express
- delete notes from backend database
- create the following routes:
  - GET `/notes` to return `notes.html`
  - GET `*` to return `index.html`
- create the following API routes
  - GET `/api/notes` which reads `db.json` file and returns all saved notes as JSON
  - POST `/api/notes` should receive a new note to save on the request body, add it to `db.json` and then return the new note
  - DELETE `/api/notes/:id` should receive a query parameter containing the id of a note to delete
    - give each note a unique id so that this function searches all notes in `db.json` and removes the appropriate note, then rewrites the notes within `db.json`
- deploy to heroku
- submit: - link to deployed heroku application - github repo link
  Secondary Goals
- folders?
- edit notes
- search feature
