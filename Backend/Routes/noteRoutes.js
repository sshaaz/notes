const express = require('express')
const { createNotes, getAllNotes, updateNotes, deleteNotes } = require('../controller/notesCtrl')


const noteRoutes = express.Router()

noteRoutes.post('/createNote',createNotes)
noteRoutes.post('/getNote',getAllNotes)
noteRoutes.post('/updateNote/:id',updateNotes)
noteRoutes.post('/deleteNote/id',deleteNotes)

module.exports = noteRoutes

