import { useState } from "react";
import "./App.css";
import React from "react";
import { useEffect } from "react";
import AddNote from "./components/custom/AddNote";
import NoteCard from "./components/custom/NoteCard";
import { Button } from "@/components/ui/button";
import { getAllNotes } from "./api/notes";

function App() {
    const [allNotes, setAllNotes] = useState([]);
    const [showAddNote, setShowAddNote] = useState(false);
    const [reload, setReload] = useState(false);
    const getNotes = async () => {
        setAllNotes(await getAllNotes());
    };
    useEffect(() => {
        if (!showAddNote || reload) {
            getNotes()
            setReload(false);
        }
        console.log("renders");
    }, [showAddNote, reload]);
    return (
        <>
            <div className={`flex flex-wrap gap-3 p-[24px] bg-[#161718] h-fit`}>
                <div
                    className={`w-screen p-[12px] h-fit ${
                        showAddNote ? "hidden" : "inline-flex"
                    }`}
                >
                    <Button
                        className="bg-black border-2 border-black hover:border-gray-950 hover:bg-gray-950"
                        onClick={() => {
                            setShowAddNote(!showAddNote);
                        }}
                    >
                        Add Note
                    </Button>
                </div>
                <AddNote
                    display={showAddNote ? "" : "hidden"}
                    butText={"Add Note"}
                    setDisplay={setShowAddNote}
                />

                {allNotes.map((note) => (
                    <NoteCard
                        notes={note}
                        key={note._id}
                    />
                ))}
            </div>
        </>
    );
}

export default App;
