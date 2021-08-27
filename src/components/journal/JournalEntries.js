import React from 'react'
import { Entry } from './Entry';

export const JournalEntries = () => {

    const entries = [1, 2, 3, 4, 5, 6, 7, 8, 10];

    return (
        <div>
            {
                entries.map(entry => (
                    <Entry key={entry} id={entry} />
                ))
            }
        </div>
    )
}
