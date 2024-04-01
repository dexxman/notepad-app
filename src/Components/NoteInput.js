import React, { useState } from 'react';

function NoteInput({ addNote }) {
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note) return;
    addNote(note);
    setNote('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder='write something' />
      <button className='add-btn' type="submit">Add Note</button>
    </form>
  );
}

export default NoteInput;