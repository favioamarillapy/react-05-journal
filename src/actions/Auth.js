import { firebase, googleAuthProvider } from '../firebase/config'
import { types } from '../types/Types'
import { clearNotes } from './Note';
import { setError, setSuccess, startLoading, stopLoading, uiRemove } from './Ui';


export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(setSuccess('Login successfull'));

                dispatch(login(user.uid, user.displayName));

                setTimeout(() => {
                    dispatch(uiRemove());
                }, 1500);

            })
            .catch(error => {
                dispatch(setError('Error an ocurred in google login'));
            });
    }
}

export const startSimpleLogin = ({ email, password }) => {
    return (dispatch) => {

        dispatch(startLoading());

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                dispatch(setSuccess('Login successfull'));

                dispatch(login(user.uid, user.displayName));

                setTimeout(() => {
                    dispatch(uiRemove());
                }, 1500);

            })
            .catch(error => {
                dispatch(setError('Error an ocurred in login'));
            });

        dispatch(stopLoading());
    }
}

export const startRegister = ({ name, email, password }) => {
    return (dispatch) => {

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async (user) => {

                await user.updateProfile({ displayName: name });

                dispatch(setSuccess('User register successfull'));

                dispatch(login(user.uid, user.displayName));

            }).catch(error => {
                dispatch(setError('Error an ocurred in user register'));
            });;
    }
}

export const login = (uid, displayName) => {
    return {
        type: types.AUTH_LOGIN,
        payload: { uid, displayName }
    }
}

export const startLogout = () => {
    return (dispatch) => {

        firebase.auth().signOut()
            .then(async (user) => {

                dispatch(logout());
                dispatch(clearNotes());

            }).catch(error => {
                dispatch(setError('Error an ocurred in user logout'));
            });;
    }
}

export const logout = () => {
    return {
        type: types.AUTH_LOGOUT
    }
}