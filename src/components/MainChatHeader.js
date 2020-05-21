import React from 'react';
import Avatar from './Avatar';
import ChatName from './ChatName';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from "react-router-dom";
import '../styles/MainChatHeader.css';

function MainChatHeader(props) {
    let { userId } = useParams();
    function handler(e) {
        document.querySelector("aside").classList.toggle("activeRight");
    }
    return (
        <header className="MainChatHeader">
            <div>
                <button onClick={handler}></button>
                <Avatar user={props.users[userId]} mod="small"/>
                <div>
                    <ChatName user={props.users[userId]} />
                    <div className="MainChatHeader-lastSeen">
                        {`last seen ${props.users[userId].lastSeen} ago`}
                    </div>
                </div>
            </div>
            <ul>
                <li><FontAwesomeIcon icon="phone-alt" /></li>
                <li><FontAwesomeIcon icon="search" /></li>
                <li><FontAwesomeIcon icon="ellipsis-h" /></li>
            </ul>
        </header>
    )
}

export default MainChatHeader;