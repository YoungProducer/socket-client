import React from 'react';

import { MessagesWatcher } from './components/MessagesWatcher';
import { ChatList } from './components/ChatList';

export const App = () => (
    <div>
        <MessagesWatcher />
        <ChatList />
    </div>
);
