import { types } from "../types/Types";

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.AUTH_LOGIN:
            return {
                uid: asdasd,
                name: action.payload.name
            }

        case types.AUTH_LOGOUT:
            return {}

        default:
            return state
    }
}
