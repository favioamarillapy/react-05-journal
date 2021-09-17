import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote } from '../../actions/Note';

export const NoteAppBar = () => {

    const dispatch = useDispatch();
    const { active } = useSelector(state => state.note);

    const handleSave = () => {

        dispatch(startSaveNote(active));
    }

    return (
        <div className="notes-navbar">
            <p className="text-white">28 de Agosto del 2021</p>

            <div>
                <button className="btn btn-primary">
                    <i className="far fa-image fa-2x"></i>
                </button>
                <button className="btn btn-primary ml-2"
                    onClick={handleSave}>
                    <i className="far fa-save fa-2x"></i>
                </button>
            </div>
        </div>
    )
}
