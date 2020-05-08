import { useEffect } from 'react';

import { Socket } from './Socket';

export const MessagesWatcher = (): null => {

    useEffect(() => {
        const socket = new Socket();

        return () => {
            socket.disconnect();
        };
    }, []);

    return null;
};
