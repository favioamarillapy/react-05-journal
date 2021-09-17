import { types } from "../types/Types";

const initialState = { notes: [], active: null }

export const noteReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.NOTE_ACTIVE:
            return {
                ...state,
                active: { ...action.payload }
            }

        case types.NOTE_LOAD:
            return {
                ...state,
                notes: [...action.payload]
            }

        case types.NOTE_DELETE:
            return {
                ...state,
                active: {},
                notes: state.notes.filter(note => note.id != action.payload)
            }

        case types.NOTE_CLEAN:
            return {
                ...state,
                active: {},
                notes: []
            }

        case types.NOTE_ADD:
            return {
                ...state,
                notes: [...state.notes, action.payload]
            }

        default:
            return state;
    }


}