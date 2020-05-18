import React from 'react';
import '../styles/Avatar.css';

function Avatar(props) {
    return (
        <div className={(props.mod) ? `Avatar Avatar--${props.mod}` : "Avatar"}>
            <img src={props.user.avatarUrl} alt={props.user.name}/>
        </div>
    )
}

export default Avatar;