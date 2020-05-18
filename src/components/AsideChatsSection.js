import React from 'react';
import ChatPreview from './ChatPreview';
import '../styles/AsideChatsSection.css';
import { Link } from "react-router-dom";

function AsideChatsSection(props) {
    return (
        <section className="AsideChatsSection">
            <ul>
                {props.users.map((el, index) => {
                    return (
                        <li key={index}>
                            <Link to={`/${index}`}>
                                <ChatPreview user={el} />
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </section>
    )
}

export default AsideChatsSection;