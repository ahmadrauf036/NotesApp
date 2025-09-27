import axios from "axios";

const Url = "http://localhost:5001/";

export async function getAllNotes() {
    try {
        const res = await axios.get(Url);
        return res.data;
    } catch (error) {
        console.log("Error in fetching Notes: ", error);
    }
}
export async function deleteNote(note_id) {
    try {
        const res = await axios.delete(Url, {
            data: { id: note_id },
        });
        return res;
    } catch (error) {
        console.log("Error in deleting Note: ", error);
    }
}
export async function updateNote(note) {
    try {
        console.log(note);
        const res = await axios.put(Url, note);
        return res;
    } catch (error) {
        console.log("Error in updating Note: ", error);
    }
}
export async function addNote(note) {
    try {
        const res = await axios.post(Url, note);
        return res;
    } catch (error) {
        console.log("Error in updating Note: ", error);
    }
}
