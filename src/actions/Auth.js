import { firebase, googleAuthProvider } from '../firebase/config'
import { types } from '../types/Types'

export const startLogin = (email, password) => {
    return (dispatch) => {

    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                console.log(user.uid, user.displayName)
                dispatch(login(user.uid, user.displayName));
            });
    }
}

export const login = (uid, displayName) => {
    return {
        type: types.AUTH_LOGIN,
        payload: { uid, displayName }
    }
}