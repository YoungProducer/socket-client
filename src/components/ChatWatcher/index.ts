import { useEffect } from 'react';

import { ChatSocket } from './Socket';

export const ChatWatcher = (): null => {

    useEffect(() => {
        const socket = new ChatSocket();

        return () => {
            socket.disconnect();
        };
    }, []);

    return null;
};
