import React from 'react'
import { Sidebar } from '../../components/journal/Sidebar'
import { NotesScreen } from '../notes/NotesScreen'

export const JournalScreen = () => {
    return (
        <div className="journal-main">

            <Sidebar />

            <div className="journal-content">
                <NotesScreen />
            </div>
        </div>
    )
}
