import Note from '../models/note_model.js';

// Create a new note
export async function createNote(req, res) {
    try {
        const { title, content } = req.body;
        const newNote = new Note({ title, content });
        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    } catch (error) {
        res.status(500).json({ message: 'Error creating note', error });
    }
}

// Get all notes
export async function getNotes(_, res) {
    try {
        const notes = await Note.find().sort({ createdAt: -1 }); // Sort by creation date descending
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching notes', error });
    }
}

// Get a single note by ID
export async function getNoteById(req, res) {
    try {
        const noteId = req.params.id;
        const note = await Note.findById(noteId);
        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching note', error });
    }
}

// Update a note by ID
export async function updateNote(req, res) {
    try {
        const noteId = req.params.id;
        const { title, content } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(
            noteId,
            { title, content },
            { new: true }
        );
        if (!updatedNote) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.status(200).json(updatedNote);
    } catch (error) {
        res.status(500).json({ message: 'Error updating note', error });
    }
}

// Delete a note by ID
export async function deleteNote(req, res) {
    try {
        const noteId = req.params.id;
        const deletedNote = await Note.findByIdAndDelete(noteId);
        if (!deletedNote) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.status(200).json({ message: 'Note deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting note', error });
    }
}


