import React from 'react'

export const RegisterScreen = () => {
    return (
        <form className="form-signin">
            <h1 className="h3 mt-5 mb-5 font-weight-normal">Please register</h1>

            <div className="form-group mt-5">
                <label className="sr-only">Name</label>
                <input type="text" id="inputName" className="form-control" placeholder="Name" />
            </div>

            <div className="form-group">
                <label className="sr-only">Email</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email" />
            </div>

            <div className="form-group">
                <label className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" />
            </div>

            <button className="btn btn-lg btn-primary btn-block mt-5" type="submit">Register</button>
            <p className="mt-5 mb-3 text-info pointer link">Login</p>
        </form>
    )
}
