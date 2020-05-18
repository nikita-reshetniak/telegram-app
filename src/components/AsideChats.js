import React from 'react';
import AsideChatsHeader from './AsideChatsHeader';
import AsideChatsSection from './AsideChatsSection';
import users from '../users.js';

function AsideChats(props) {
    return (
        <div>
            <AsideChatsHeader />
            <AsideChatsSection users={users} />
        </div>
    )
}

export default AsideChats;