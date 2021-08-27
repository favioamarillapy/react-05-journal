import React from 'react'

export const NoteAppBar = () => {
    return (
        <div className="notes-navbar">
            <p className="text-white">28 de Agosto del 2021</p>

            <div>
                <button className="btn btn-primary">
                    <i className="far fa-image fa-2x"></i>
                </button>
                <button className="btn btn-primary ml-2">
                    <i className="far fa-save fa-2x"></i>
                </button>
            </div>
        </div>
    )
}
