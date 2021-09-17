import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startImageUpload, startSaveNote } from '../../actions/Note';

export const NoteAppBar = () => {

    const dispatch = useDispatch();
    const { active } = useSelector(state => state.note);

    const handleSave = () => {

        dispatch(startSaveNote(active));
    }

    const handlePicture = (e) => {
        e.preventDefault();
        document.querySelector('#file-selector').click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            dispatch(startImageUpload(file));
        }
    }

    return (
        <div className="notes-navbar">
            <p className="text-white">28 de Agosto del 2021</p>

            <input type="file" id="file-selector" style={{ display: 'none' }} onChange={handleFileChange} />

            <div>
                <button className="btn btn-primary"
                    onClick={handlePicture}>
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
