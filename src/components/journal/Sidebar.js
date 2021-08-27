import React from 'react'
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {
    return (
        <div className="journal-sidebar">

            <div className="profile mt-3">
                <h3>
                    <i className="far fa-moon"></i>  Favio Amarilla
                </h3>

                <button className="btn text-white">Logout</button>
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
