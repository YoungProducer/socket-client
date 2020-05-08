import React from 'react';

import { ChatListProps } from './container';

export const ChatList = ({ senders, onChatClick }: ChatListProps) => {
    return (
        <ul>
            { senders.map((sender, index) => (
                <li
                    key={index}
                    onClick={() => onChatClick(sender)}
                >
                    {sender}
                </li>
            ))}
        </ul>
    );
};
