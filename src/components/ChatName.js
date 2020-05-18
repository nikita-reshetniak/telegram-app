import React from 'react';
import '../styles/ChatName.css';

function ChatName(props) {
    return (
        <div className={(props.mod) ? `ChatName ChatName--${props.mod}` : "ChatName"}>
            {props.user.name}
        </div>
    )
}

export default ChatName;