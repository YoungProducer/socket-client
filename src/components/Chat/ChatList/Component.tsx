import React from 'react';

import { ChatListProps } from './container';

export const ChatList = ({ senders }: ChatListProps) => {
    return (
        <ul>
            { senders.map((sender, index) => (
                <li key={index}>{sender}</li>
            ))}
        </ul>
    );
};
