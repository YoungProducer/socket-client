import React, { useState, useMemo } from 'react';

import { ChatProps } from './container';
import { ChatList } from './ChatList';
import { ChatJoin } from './ChatJoin';
import { Messages } from './Messages';
import { SendMessage } from './SendMessage';

export const Chat = ({ chatList }: ChatProps) => {
    const [sender, setSender] = useState<string>('');

    const messages = useMemo(() => {
        const chat = chatList.find(chat => chat.sender === sender);
        return chat ? chat.messages : [];
    }, [sender, chatList]);

    return (
        <div>
            <ChatList onChatClick={setSender} />
            <ChatJoin />
            <Messages messages={messages} />
            <SendMessage receiver={sender} />
        </div>
    );
};
