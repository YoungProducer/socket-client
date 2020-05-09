import { useEffect } from 'react';

import { chatSocket } from './Socket';

export const ChatWatcher = (): null => {

    useEffect(() => {
        chatSocket.connect();

        return () => {
            chatSocket.disconnect();
        };
    }, []);

    return null;
};
