import React, { useState } from "react";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import AddNote from "./AddNote";
import { deleteNote } from "@/api/notes";

const NoteCard = ({ notes }) => {
    const [showUpdateNote, setShowUpdateNote] = useState(false);
    const [noteDeleted, setNoteDeleted] = useState(false);

    const [title, setTitle] = useState(notes.title)
    const [content, setContent] = useState(notes.content)
    const dltNote = async () => {
        await deleteNote(notes._id);
        setNoteDeleted(true);
    };

    return (
        <>
            <Card
                className={`${
                    showUpdateNote || noteDeleted ? "hidden" : ""
                } min-w-[250px] max-w-[380px]`}
            >
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>{content}</p>
                </CardContent>
                <CardFooter className="w-full flex justify-between">
                    <Button
                        onClick={() => {
                            setShowUpdateNote(true);
                        }}
                        className="bg-black border-2 border-black hover:border-gray-950 hover:bg-gray-950"
                    >
                        Edit
                    </Button>
                    <Button
                        className="bg-black border-2 border-black hover:border-gray-950 hover:bg-gray-950"
                        onClick={dltNote}
                    >
                        Delete
                    </Button>
                </CardFooter>
            </Card>
            <AddNote
                display={showUpdateNote ? "" : "hidden"}
                setDisplay={setShowUpdateNote}
                butText={"Update Note"}
                toBeUpdated={{
                    id: notes._id,
                    title: notes.title,
                    content: notes.content,
                }}
                setNoteTitle={setTitle}
                setNoteContent={setContent}
            />
        </>
    );
};

export default NoteCard;
