import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
// import '../styles/Contacts.css';

function Contacts(props) {
    return (
        <ul className="Contacts">
            <h1>Contacts</h1>
        </ul>
    )
}

export default Contacts;