import mongoose from "mongoose";
import note from "../models/notes.js";

export async function getAllNotes(req, res) {
    try {
        const notes = await note.find();
        res.send(notes);
    } catch (error) {
        res.send(error);
    }
}
export async function addNote(req, res) {
    try {
        const newNote = await note.create(req.body);
        note.insertOne(newNote)
    } catch (error) {
        res.send(error);
    }
    return;
}
export async function updateNote(req, res) {
    try {
        console.log(req.body.id)
        const updatedNote = await note.findByIdAndUpdate(
            req.body.id,
            {
                title: req.body.title,
                content: req.body.content,
            }
        );
        if (!updatedNote) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.send("update");
    } catch (error) {
        res.send(error);
    }
    return;
}

export async function deleteNote(req, res) {
    try {
        const result = await note.deleteOne({ _id: req.body.id });
        return res.json({ message: "Note deleted successfully" });
    } catch (error) {
        console.error("Delete error:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}
