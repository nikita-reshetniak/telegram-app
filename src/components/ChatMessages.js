import React from 'react';
import Avatar from './Avatar';
import ChatName from './ChatName';
import Message from './Message';
import Time from './Time';
import '../styles/ChatMessages.css';
import {useParams} from "react-router-dom";

function ChatMessages(props) {
    let { userId } = useParams();
    return (
        <ul className="ChatMessages">
            {props.users[userId].messages.map((el, index, arr) => {
                const previousMessage = arr[index - 1];
                const doesNewBlock = (previousMessage) ? new Date(el.time - previousMessage.time) > new Date(15 * 60 * 1000) : true;
                return (
                    <li key={index}>
                        <div>
                            {doesNewBlock && <Avatar user={props.users[userId]} mod="small" />}
                        </div>
                        <div>
                            <div>
                                {doesNewBlock && <ChatName user={props.users[userId]} mod="blue" />}
                                <Message message={el.message} />
                            </div>
                            <Time time={el.time} />
                        </div>
                    </li>
                );
            })}
        </ul>
    )
}

export default ChatMessages;