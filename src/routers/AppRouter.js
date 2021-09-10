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

    const [authenticated, setAutenthicated] = useState(false);
    const [logged, setLogged] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
            }

            setAutenthicated(true);
            setLogged(user?.uid);

        });
    }, [dispatch, setAutenthicated, setLogged]);


    if (!authenticated) {
        return <h1> Loading... </h1>
    }


    return (
        <Router>
            <div>
                <Switch>

                    <PublicRoute
                        path="/auth"
                        component={AuthRouter}
                        isAuthenticated={logged} />

                    <PrivateRoute
                        exact
                        isAuthenticated={logged}
                        path="/"
                        component={JournalScreen} />

                    <Redirect to="/auth/login" />

                </Switch>

            </div>
        </Router>
    )
}
