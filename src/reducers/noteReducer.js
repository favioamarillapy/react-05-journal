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

        default:
            return state;
    }


}