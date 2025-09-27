import express from "express";
import { getAllNotes, addNote, deleteNote, updateNote } from "../controllers/notesController.js";

const app = express()

const router = express.Router()

router.get("/", getAllNotes);
router.post("/", addNote);
router.delete("/",deleteNote)
router.put("/",updateNote)

export default router