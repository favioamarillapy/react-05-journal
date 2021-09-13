import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/Auth';
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {

    const dispatch = useDispatch();
    const { displayName } = useSelector(state => state.auth);

    const handleLogout = (e) => {

        dispatch(startLogout());

    }

    return (
        <div className="journal-sidebar">

            <div className="profile mt-3">
                <h3>
                    {displayName}
                </h3>

                <button type="button" className="btn text-white" onClick={handleLogout} >Logout</button>
            </div>

            <div className="add mt-5">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p>New Entry</p>
            </div>

            <div className="entries mt-5">
                <JournalEntries />
            </div>




        </div>
    )
}
