import moment from 'moment'
import React from 'react'

export const Entry = ({ id, title, body, date, url }) => {

    const day = moment(date).format('dddd');
    const dateFormat = moment(date).format('Do');

    return (
        <div className="entry-content mb-2">

            {
                (url) ?
                    (
                        <div className="entry-img"
                            style={{ backgroundSize: 'cover', backgroundImage: `url(${url})` }}   >
                        </div>
                    )
                    :
                    (<div className="entry-img"
                        style={{ backgroundSize: 'cover', backgroundImage: `url(https://via.placeholder.com/150)` }}   >
                    </div>

                    )
            }


            <div className="entry-text">
                <strong>{title}</strong>
                <p className="description text-muted">{body}</p>
            </div>
            <div className="entry-date">
                <strong className="day"> {day}</strong>
                {dateFormat}
            </div>
        </div>
    )
}
