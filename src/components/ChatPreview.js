import React from 'react';
import Avatar from './Avatar';
import ChatName from './ChatName';
import Message from './Message';
import Time from './Time';
import '../styles/ChatPreview.css';

function ChatPreview(props) {
    const lastMessage = props.user.messages[props.user.messages.length - 1];
    return (
        <div className="ChatPreview">
            <Avatar user={props.user} />
            <div>
                <div>
                    <ChatName user={props.user} />
                    <Message message={lastMessage.message} />
                </div>
                <Time time={lastMessage.time} />
            </div>
        </div>
    )
}

export default ChatPreview;