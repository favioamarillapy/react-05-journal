import React from 'react';
import LoadingOverlay from 'react-loading-overlay';
import { useDispatch, useSelector } from 'react-redux';

import { startGoogleLogin, startSimpleLogin } from '../../actions/Auth';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { setError } from '../../actions/Ui';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const { error, message, loading } = useSelector(state => state.ui);

    const [formsValues, handleInputChange] = useForm({
        email: 'amarillafavio@gmail.com',
        password: '123456'
    });
    const { email, password } = formsValues;

    const isFormValid = () => {
        if (validator.isEmpty(email)) {
            dispatch(setError('Then fiel email is required'));
            return false;
        }
        if (!validator.isEmail(email)) {
            dispatch(setError('Then fiel email format is incorrect'));
            return false;
        }
        if (validator.isEmpty(password)) {
            dispatch(setError('Then fiel password is required'));
            return false;
        }

        return true;
    }


    const handleLogin = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            dispatch(startSimpleLogin(formsValues));
        }

    }

    const handleGoogleLogin = (e) => {
        e.preventDefault();

        dispatch(startGoogleLogin());
    }

    return (
        <div className="auth-content">
            <form className="form-signin" onSubmit={handleLogin}>
                <h1 className="h3 mt-5 mb-5 font-weight-normal">Please sign in</h1>

                {
                    error && message &&
                    (
                        <div className="alert alert-danger" role="alert">
                            {message}
                        </div>
                    )
                }
                {
                    !error && message &&
                    (
                        <div className="alert alert-success" role="alert">
                            {message}
                        </div>
                    )
                }

                {
                    loading && (
                        <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    )
                }


                <div className="form-group">
                    <label className="sr-only">Email</label>
                    <input type="email" name="email" className="form-control" placeholder="Email" value={email} onChange={handleInputChange} />
                </div>

                <div className="form-group">
                    <label className="sr-only">Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Password" value={password} onChange={handleInputChange} />
                </div>

                <button className="btn btn-lg btn-primary btn-block mt-5" type="submit" disabled={loading}>
                    Sign in
                </button>
                <button className="btn btn-outline-primary btn-block" type="button"
                    disabled={loading}
                    onClick={handleGoogleLogin}>
                    <i className="fab fa-google"></i> Sign in with Google
                </button>
                <p className="mt-4 mb-3 text-info pointer link">Create new account</p>
            </form>
        </div>
    )
}
