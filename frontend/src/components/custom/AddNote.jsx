import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addNote, updateNote } from "@/api/notes";

const AddNote = ({ display, setDisplay, butText, toBeUpdated, setNoteTitle, setNoteContent }) => {
    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");

    const onAddNote = async () => {
        await addNote({ title, content: note });
    };
    const onUpdateNote = async () => {
        console.log(toBeUpdated.id,title,note)
        await updateNote({ id: toBeUpdated.id, title, content: note });
    };

    useEffect(() => {
        if (toBeUpdated) {
            setTitle(toBeUpdated.title);
            setNote(toBeUpdated.content);
        }
    }, []);

    return (
        <Card
            className={`${display} w-full h-fit max-w-sm bg-black text-white border-[#161718]`}
        >
            <CardContent>
                <form>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Title</Label>
                            <Input
                                id="title"
                                type="text"
                                placeholder="Title..."
                                required
                                className="bg-[#161718] border-[#161718]"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Content</Label>
                            </div>
                            <Input
                                id="content"
                                type="text"
                                placeholder="Content..."
                                required
                                className="bg-[#161718] border-[#161718]"
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                            />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button
                    onClick={() => {
                        if (!toBeUpdated) {
                            onAddNote();
                            setNote("");
                            setTitle("");
                        } else {
                            onUpdateNote();
                            setNoteTitle(title)
                            setNoteContent(note)
                        }
                        setDisplay(false);
                    }}
                    className="w-full bg-white hover:bg-[#161718] hover:text-white text-black"
                >
                    {butText}
                </Button>
            </CardFooter>
        </Card>
    );
};

export default AddNote;
