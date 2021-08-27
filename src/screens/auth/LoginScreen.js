import React from 'react'

export const LoginScreen = () => {
    return (
        <div className="auth-content">
            <form className="form-signin">
                <h1 className="h3 mt-5 mb-5 font-weight-normal">Please sign in</h1>

                <div className="form-group">
                    <label className="sr-only">Email</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email" />
                </div>

                <div className="form-group">
                    <label className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" />
                </div>

                <button className="btn btn-lg btn-primary btn-block mt-5" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-info pointer link">Create new account</p>
            </form>
        </div>
    )
}
