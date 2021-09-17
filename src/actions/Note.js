import { db } from "../firebase/config";
import { types } from "../types/Types";
import { setSuccess, uiRemove } from "./Ui";

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

export const startActiveNote = (note) => {
    return async (dispatch) => {

        dispatch(startNoteData(types.NOTE_ACTIVE, { ...note }));
    }
}

export const startSaveNote = (note) => {
    return async (dispatch, state) => {

        const { uid } = state().auth;

        const persist = { ...note };

        delete persist.id;
        if (!persist.url) {
            delete persist.url;
        }


        await db.doc(`${uid}/journal/notes/${note.id}`).update(persist);


        dispatch(startNoteData(types.NOTE_ACTIVE, { ...note }));

        dispatch(startNoteLoad());

        dispatch(setSuccess('Note updated successfull'));

        setTimeout(() => {
            dispatch(uiRemove());
        }, 2000);
    }
}

export const startImageUpload = (file) => {
    return async (dispatch, state) => {

        const { active } = state().note;
        const apiUrl = `https://api.cloudinary.com/v1_1/dmeswpvll/image/upload`;

        const formData = new FormData();
        formData.append('upload_preset', 'react-05-journal');
        formData.append('file', file);

        const response = await fetch(apiUrl, {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const resp = await response.json();
            active.url = resp.secure_url;

            dispatch(startSaveNote(active))
        }
    }
}

export const startDeleteNote = (id) => {
    return async (dispatch, state) => {

        const { uid } = state().auth

        await db.doc(`${uid}/journal/notes/${id}`).delete();

        dispatch(deleteNote(id));
    }
}

export const deleteNote = (id) => ({
    type: types.NOTE_DELETE,
    payload: id
});


export const startNoteData = (type, payload) => ({
    type,
    payload
});