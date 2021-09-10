import { types } from "../types/Types";

export const setError = (error) => ({
    type: types.UI_SET_ERROR,
    payload: error
});

export const setSuccess = (success) => ({
    type: types.UI_SET_SUCCESS,
    payload: success
});

export const uiRemove = () => ({
    type: types.UI_REMOVE,
});

export const startLoading = () => ({
    type: types.UI_START_LOADING
});

export const stopLoading = () => ({
    type: types.UI_STOP_LOADING
});