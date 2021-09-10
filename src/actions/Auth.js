import { firebase, googleAuthProvider } from '../firebase/config'
import { types } from '../types/Types'
import { setError, setSuccess } from './Ui';


export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(setSuccess('Login successfull'));

                dispatch(startLogin(user.uid, user.displayName));

            })
            .catch(error => {
                dispatch(setError('Error an ocurred in google login'));
            });
    }
}

export const startSimpleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(setSuccess('Login successfull'));

                dispatch(startLogin(user.uid, user.displayName));

            })
            .catch(error => {
                dispatch(setError('Error an ocurred in google login'));
            });
    }
}

export const startLogin = (uid, displayName) => {
    return {
        type: types.AUTH_LOGIN,
        payload: { uid, displayName }
    }
}

export const startRegister = ({ name, email, password }) => {
    return (dispatch) => {

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async (user) => {

                await user.updateProfile({ displayName: name });

                dispatch(setSuccess('User register successfull'));

                dispatch(startLogin(user.uid, user.displayName));

            }).catch(error => {
                dispatch(setError('Error an ocurred in user register'));
            });;
    }
}