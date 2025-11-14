import React from 'react'

import './Notes.css'
import { useState, useEffect } from 'react'


const Notes = () => {

  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({ title: '', message: '', category: '' });
  const [editIndex, setEditIndex] = useState(null);

  // Fetch notes from localStorage on first render
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  // Save notes to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.title || !note.message || !note.category) return;

    if (editIndex !== null) {
      const updateNotes = [...notes];
      updateNotes[editIndex] = note;
      setNotes(updateNotes);
    } else {
      setNotes([...notes, note]);
    }
    setNote({ title: '', message: '', category: '' })
  };

  const handleEdit = (index) => {
    setNote(notes[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const filteredNotes = notes.filter((_, i) => i !== index);
    setNotes(filteredNotes);
  };


  return (


    <div className="todo-container">
      <h1>My To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input type="text" name="title" placeholder="Title..." value={note.title} onChange={handleChange} /><br /><br />
          <input type="textarea" name="message" placeholder="Message..." value={note.message} onChange={handleChange} /><br /><br />
          <input type="text" name="category" placeholder="Category..." value={note.category} onChange={handleChange} /><br /><br />
          <button type="Submit" id="add-task-btn"> {editIndex !== null ? 'Update' : 'Add'} </button>
        </div>
      </form>
      <ul id="task-list">
        {notes.map((item, index) => (
          <li key={index} className='task-item'>
            <h3>{item.title}</h3>
            <p>{item.message}</p>
            <small>{item.category}</small>
            <div className='actions'>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Notes