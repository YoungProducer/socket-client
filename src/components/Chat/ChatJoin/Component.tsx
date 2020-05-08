import React, { useState, useCallback } from 'react';

import { ChatJoinProps } from './container';

export const ChatJoin = ({
    join,
}: ChatJoinProps) => {
    const [userId, setUserId] = useState<string>('');

    const handleChangeUserId = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => setUserId(event.target.value);

    const handleJoinClick = useCallback(() => {
        join(userId);
    }, [userId]);

    return (
        <div>
            <input
                type='text'
                value={userId}
                onChange={handleChangeUserId}
            />
            <button onClick={handleJoinClick}>Join</button>
        </div>
    );
};
