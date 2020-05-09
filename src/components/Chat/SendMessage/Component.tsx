import React, { useState, useCallback } from 'react';

import { SendMessageProps } from './container';

export const SendMessage = ({
    receiver,
    emitSendMessage,
}: SendMessageProps) => {
    const [message, setMessage] = useState<string>('');

    const handleChangeMessage =
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setMessage(event.currentTarget.value);
        };

    const handleSendMessageClick = useCallback(() => {
        emitSendMessage({
            receiver,
            body: message,
        });
    }, [message, receiver, emitSendMessage]);

    return (
        <div>
            <input
                type='text'
                value={message}
                onChange={handleChangeMessage}
            />
            <button onClick={handleSendMessageClick}>Send message</button>
        </div>
    );
};
