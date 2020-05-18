import React from 'react';
import '../styles/MainChatFooter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MainChatFooter(props) {
    return (
        <ul className="MainChatFooter">
            <li>
                <FontAwesomeIcon icon="paperclip" />
            </li>
            <li>
                <input type="text" placeholder="Write a message..."/>
            </li>
            <li>
                <FontAwesomeIcon icon="laugh"/>
            </li>
            <li>
                <FontAwesomeIcon icon="microphone"/>
            </li>
        </ul>
    )
}

export default MainChatFooter;