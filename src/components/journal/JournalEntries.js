import React from 'react'
import { useSelector } from 'react-redux';
import { Entry } from './Entry';

export const JournalEntries = () => {

    const { notes } = useSelector(state => state.note);

    console.log(notes)

    return (
        <div>
            {
                notes.map(note => (
                    <Entry key={note.id} {...note} />
                ))
            }
        </div>
    )
}
