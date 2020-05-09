import React from 'react';
import classNames from 'classnames';

import { ChatSocket } from 'components/ChatWatcher/Socket';
import styles from './styles.module.css';

interface MessagesProps {
    messages: ChatSocket.UserMessage[];
    contact: string;
}

export const Messages = ({ messages, contact }: MessagesProps) => {
    return (
        <ul className={styles.messages}>
            {messages.map((message, index) => (
                <li
                    key={index}
                    className={classNames(styles.message, {
                        [styles.userMessage]: contact !== message.owner,
                        [styles.contactMessage]: contact === message.owner,
                    })}
                >
                    <p>{message.body}</p>
                </li>
            ))}
        </ul>
    );
};
