import React, { useState, useMemo } from 'react';

import { ChatProps } from './container';
import { ChatList } from './ChatList';
import { ChatJoin } from './ChatJoin';
import { Messages } from './Messages';
import { SendMessage } from './SendMessage';

export const Chat = ({ chatList }: ChatProps) => {
    const [receiver, setReceiver] = useState<string>('');

    const messages = useMemo(() => {
        const chat = chatList.find(chat => chat.contact === receiver);
        return chat ? chat.messages : [];
    }, [receiver, chatList]);

    return (
        <div>
            <ChatList onChatClick={setReceiver} />
            <ChatJoin />
            <Messages messages={messages} />
            <SendMessage receiver={receiver} />
        </div>
    );
};
