import React from 'react'
import { useDispatch } from 'react-redux';
import { startGoogleLogin } from '../../actions/Auth';
import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [formInputs, handleInputChange] = useForm({
        email: 'amarillafavio@gmail.com',
        password: 123456
    });
    const { email, password } = formInputs;

    const handleLogin = (e) => {
        e.preventDefault();

    }

    const handleGoogleLogin = (e) => {
        e.preventDefault();

        dispatch(startGoogleLogin());
    }

    return (
        <div className="auth-content">
            <form className="form-signin" onSubmit={handleLogin}>
                <h1 className="h3 mt-5 mb-5 font-weight-normal">Please sign in</h1>

                <div className="form-group">
                    <label className="sr-only">Email</label>
                    <input type="email" name="email" className="form-control" placeholder="Email" value={email} onChange={handleInputChange} />
                </div>

                <div className="form-group">
                    <label className="sr-only">Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Password" value={password} onChange={handleInputChange} />
                </div>

                <button className="btn btn-lg btn-primary btn-block mt-5" type="button">Sign in</button>
                <button className="btn btn-outline-primary btn-block" type="button" onClick={handleGoogleLogin}>
                    <i className="fab fa-google"></i> Sign in with Google
                </button>
                <p className="mt-4 mb-3 text-info pointer link">Create new account</p>
            </form>
        </div>
    )
}
