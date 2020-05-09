import React from 'react';

import { ChatSocket } from 'components/ChatWatcher/Socket';

interface MessagesProps {
    messages: ChatSocket.UserMessage[];
}

export const Messages = ({ messages }: MessagesProps) => {
    return (
        <ul>
            {messages.map((message, index) => (
                <li key={index}>
                    <p>Owner: {message.owner}</p>
                    <p>Message: {message.body}</p>
                </li>
            ))}
        </ul>
    );
};
