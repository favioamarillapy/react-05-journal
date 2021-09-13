import React from 'react'
import { useSelector } from 'react-redux'
import { NothingSelected } from '../../components/journal/NothingSelected'
import { Sidebar } from '../../components/journal/Sidebar'
import { NotesScreen } from '../notes/NotesScreen'

export const JournalScreen = () => {

    const { active } = useSelector(state => state.note);

    return (
        <div className="journal-main">

            <Sidebar />

            <div className="journal-content">
                {
                    (active) ?
                        (<NotesScreen />)
                        :
                        (<NothingSelected />)
                }
            </div>
        </div>
    )
}
