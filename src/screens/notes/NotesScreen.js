import React from 'react'
import { NoteAppBar } from '../../components/notes/NoteAppBar'

export const NotesScreen = () => {
    return (
        <div>
            <NoteAppBar />

            <div className="note-container mt-5">
                <h1 className="text-white">Create a new entry!</h1>

                <form className="form">
                    <div className="form-group  col-md-6">
                        <label>Title</label>
                        <input type="text" className="form-control" placeholder="Title" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group  col-md-6">
                        <label>Description</label>
                        <textarea rows="5" className="form-control" placeholder="Description"></textarea>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group  col-md-12">
                        <div className="row">
                            <div className="col-md-2 mb-3">
                                <img className="note-img" src="https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?size=626&ext=jpg&ga=GA1.2.2045755189.1629763200" alt="profile" />
                            </div>
                            <div className="col-md-2 mb-3">
                                <img className="note-img" src="https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?size=626&ext=jpg&ga=GA1.2.2045755189.1629763200" alt="profile" />
                            </div>
                            <div className="col-md-2 mb-3">
                                <img className="note-img" src="https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?size=626&ext=jpg&ga=GA1.2.2045755189.1629763200" alt="profile" />
                            </div>
                            <div className="col-md-2 mb-3">
                                <img className="note-img" src="https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?size=626&ext=jpg&ga=GA1.2.2045755189.1629763200" alt="profile" />
                            </div>
                            <div className="col-md-2 mb-3">
                                <img className="note-img" src="https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?size=626&ext=jpg&ga=GA1.2.2045755189.1629763200" alt="profile" />
                            </div>
                            <div className="col-md-2 mb-3">
                                <img className="note-img" src="https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?size=626&ext=jpg&ga=GA1.2.2045755189.1629763200" alt="profile" />
                            </div>
                        </div>
                    </div>

                </form>

            </div>
        </div>
    )
}
