import React from 'react';

import { ChatListProps } from './container';

export const ChatList = ({ senders }: ChatListProps) => {
    return (
        <ul>
            { senders.map(sender => (
                <li>{sender}</li>
            ))}
        </ul>
    );
};
