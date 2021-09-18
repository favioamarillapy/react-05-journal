import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { startRegister } from '../../actions/Auth';
import { setError } from '../../actions/Ui';

import { useForm } from '../../hooks/useForm'

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const { error, message } = useSelector(state => state.ui);

    const [formsValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    })
    const { name, email, password } = formsValues;

    const isFormValid = () => {
        if (validator.isEmpty(name)) {
            dispatch(setError('Then fiel name is required'));
            return false;
        }
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

    const register = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            dispatch(startRegister(formsValues));
        }
    }


    return (
        <div className="auth-content">
            <form className="form-signin animate__animated animate__fadeIn animate_faster" onSubmit={register}>
                <h1 className="h3 mb-5 font-weight-normal">Please register</h1>

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


                <div className="form-group">
                    <label className="sr-only">Name</label>
                    <input type="text" name="name" className="form-control" placeholder="Name" value={name} onChange={handleInputChange} />
                </div>

                <div className="form-group">
                    <label className="sr-only">Email</label>
                    <input type="email" name="email" className="form-control" placeholder="Email" value={email} onChange={handleInputChange} />
                </div>

                <div className="form-group">
                    <label className="sr-only">Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Password" value={password} onChange={handleInputChange} />
                </div>

                <button className="btn btn-lg btn-primary btn-block mt-5" type="submit">Register</button>
                <Link
                    to="/auth/login"
                    className="mt-4 mb-3 text-info pointer link"
                >
                    Login?
                </Link>
            </form>
        </div>
    )
}
