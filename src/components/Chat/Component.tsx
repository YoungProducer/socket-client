import React, { useState, useMemo } from 'react';

import { ChatProps } from './container';
import { ChatList } from './ChatList';
import { ChatJoin } from './ChatJoin';
import { Messages } from './Messages';
import { SendMessage } from './SendMessage';
import { CreateChat } from './CreateChat';

export const Chat = ({ chatList, joined }: ChatProps) => {
    const [receiver, setReceiver] = useState<string>('');

    const messages = useMemo(() => {
        const chat = chatList.find(chat => chat.contact === receiver);
        return chat ? chat.messages : [];
    }, [receiver, chatList]);

    return (
        <div>
            <ChatJoin />
            {joined && (
                <>
                    <ChatList onChatClick={setReceiver} />
                    <CreateChat />
                </>
            )}
            {receiver !== '' && (
                <>
                    <Messages
                        messages={messages}
                        contact={receiver}
                    />
                    <SendMessage receiver={receiver} />
                </>
            )}
        </div>
    );
};
