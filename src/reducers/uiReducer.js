import { types } from "../types/Types";

const initialState = {
    loading: false,
    error: false,
    message: null
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.UI_SET_ERROR:
            return {
                ...state,
                error: true,
                message: action.payload
            }

        case types.UI_SET_SUCCESS:
            return {
                ...state,
                error: false,
                message: action.payload
            }

        case types.UI_REMOVE:
            return initialState;

        default:
            return state
    }
}
