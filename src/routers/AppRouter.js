import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { JournalScreen } from '../screens/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { firebase } from '../firebase/config';
import { startLogin } from '../actions/Auth';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [authenticated, setAutenthicated] = useState(false);
    const [logged, setLogged] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user?.uid) {
                dispatch(startLogin(user.uid, user.displayName));
            }

            setLogged(user?.uid);
            setAutenthicated(true);
            
        });
    }, [dispatch, setAutenthicated]);

    if (!authenticated) {
        return <h1> Loading... </h1>
    }


    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/auth" component={AuthRouter} />
                    <Route exact path="/" component={JournalScreen} />

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}
