const express = require('express')
const { createNotes, getAllNotes, updateNotes, deleteNotes } = require('../controller/notesCtrl')


const noteRoutes = express.Router()

noteRoutes.post('/createNote',createNotes)
noteRoutes.get('/getNote',getAllNotes)
noteRoutes.put('/updateNote/:id',updateNotes)
noteRoutes.delete('/deleteNote/id',deleteNotes)

module.exports = noteRoutes

