import React from 'react';

import { ChatListProps } from './container';
import styles from './styles.module.css';

export const ChatList = ({ senders, onChatClick }: ChatListProps) => {
    return (
        <div>
            <p>Chats list</p>
            <ul className={styles.chatList}>
                {senders.map((sender, index) => (
                    <li
                        key={index}
                        className={styles.chatListItem}
                        onClick={() => onChatClick(sender)}
                    >
                        {sender}
                    </li>
                ))}
            </ul>
        </div>
    );
};
