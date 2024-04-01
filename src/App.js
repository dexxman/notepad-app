
import './App.css';
import React, { useState } from 'react';
import NoteInput from './Components/NoteInput';
import NoteList from './Components/NoteList';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>MY NOTEPAD!</h1>
      <NoteInput addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;


