import { db } from "../firebase/config";
import { types } from "../types/Types";

export const startNoteAdd = () => {
    return async (dispatch, state) => {

        const { uid } = state().auth;

        const note = {
            title: '',
            body: '',
            date: new Date().getTime()
        };

        const docRef = await db.collection(`${uid}/journal/notes`).add(note);

        const payload = {
            id: docRef.id,
            ...note
        };

        dispatch(startNoteData(types.NOTE_ACTIVE, payload));
    }
}


export const startNoteLoad = () => {
    return async (dispatch, state) => {

        const { uid } = state().auth;

        const collection = await db.collection(`${uid}/journal/notes`).get();

        const notes = [];
        collection.forEach(element => {
            notes.push({
                id: element.id,
                ...element.data()
            });
        });


        dispatch(startNoteData(types.NOTE_LOAD, notes));
    }
}


export const startNoteData = (type, payload) => ({
    type,
    payload
});