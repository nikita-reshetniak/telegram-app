import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useRouteMatch } from "react-router-dom";
import '../styles/AsideNav.css';

function AsideNav(props) {
    let { path, url } = useRouteMatch();

    return (
        <nav className="AsideNav">
            <ul>
                <li>
                    <Link >
                        <FontAwesomeIcon icon="user-circle" />
                    </Link>
                </li>
                <li>
                    <Link >
                        <FontAwesomeIcon icon="phone-alt" />
                    </Link>
                </li>
                <li>
                    <Link to={`${url}/chats`}>
                        <FontAwesomeIcon icon="comments" />
                    </Link>
                </li>
                <li>
                    <Link >
                        <FontAwesomeIcon icon="cog" />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default AsideNav;