import React from 'react';

interface MessagesProps {
    messages: string[];
}

export const Messages = ({ messages }: MessagesProps) => {
    return (
        <ul>
            {messages.map((message, index) => (
                <li key={index}>{message}</li>
            ))}
        </ul>
    );
};
