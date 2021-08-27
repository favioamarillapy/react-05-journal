import React from 'react'

export const Entry = ({ id }) => {
    return (
        <div className="entry-content mb-2">

            <div className="entry-img"
                style={{ backgroundSize: 'cover', backgroundImage: 'url(https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?size=626&ext=jpg&ga=GA1.2.2045755189.1629763200)' }}
            >
            </div>
            <div className="entry-text">
                <strong>Title</strong>
                <p className="description text-muted">Description of the entry asdasd</p>
            </div>
            <div className="entry-date">
                <strong className="day">Monday</strong>
                25
            </div>
        </div>
    )
}
