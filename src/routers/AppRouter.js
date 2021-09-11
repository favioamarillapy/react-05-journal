import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

import { JournalScreen } from '../screens/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { firebase } from '../firebase/config';
import { login } from '../actions/Auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);



    useEffect(() => {

        firebase.auth().onAuthStateChanged(async (user) => {

            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);

            } else {
                setIsLoggedIn(false);
            }

            setChecking(false);

        });

    }, [dispatch, setChecking, setIsLoggedIn])


    if (checking) {
        return (
            <h1>Wait...</h1>
        )
    }


    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        path="/auth"
                        component={AuthRouter}
                        isAuthenticated={isLoggedIn}
                    />

                    <PrivateRoute
                        exact
                        isAuthenticated={isLoggedIn}
                        path="/"
                        component={JournalScreen}
                    />

                    <Redirect to="/auth/login" />


                </Switch>
            </div>
        </Router>
    )
}