import React from 'react';

import { MessagesWatcher } from './components/MessagesWatcher';
import { Chat } from './components/Chat';

export const App = () => (
    <div>
        <MessagesWatcher />
        <Chat />
    </div>
);
