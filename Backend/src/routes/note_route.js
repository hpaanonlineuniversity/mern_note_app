import express from 'express';
import { createNote, getNotes, getNoteById, updateNote, deleteNote } from '../controllers/note_controller.js'; 


const router = express.Router();

// Define routes and map them to controller functions

// Create a new note
router.post('/', createNote);

// Get all notes
router.get('/', getNotes);

// Get a single note by ID
router.get('/:id', getNoteById);

// Update a note by ID
router.put('/:id', updateNote);

// Delete a note by ID
router.delete('/:id', deleteNote);

export default router;