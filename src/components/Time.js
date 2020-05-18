import React from 'react';

function Time(props) {
    const hh = (props.time.getHours() > 12) ? props.time.getHours() - 12 : props.time.getHours();
    const mm = props.time.getMinutes();
    const period = (props.time.getHours() >= 12) ? "PM" : "AM";
    return (
        <div className="Time">
            {`${hh}:${mm} ${period}`}
        </div>
    )
}

export default Time;