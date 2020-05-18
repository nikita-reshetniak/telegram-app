import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Search from './Search';
import '../styles/AsideChatsHeader.css';

function AsideChatsHeader(props) {
    return (
        <header className="AsideChatsHeader">
            <Search />
            <div className="edit">
                <FontAwesomeIcon icon="edit" />
            </div>
        </header>
    )
}

export default AsideChatsHeader;