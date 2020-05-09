import React, { useState, useCallback } from 'react';

import { CreateChatProps } from './container';

export const CreateChat = ({ emitCreateChat }: CreateChatProps) => {
    const [contact, setContact] = useState<string>('');
    const [create, setCreate] = useState<boolean>(false);

    const handleChangeContact = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setContact(event.target.value);
    };

    const toggleCreate = () => setCreate(create => !create);

    const handleCreateChat = useCallback(() => {
        emitCreateChat(contact);
        toggleCreate();
    }, [contact, emitCreateChat, toggleCreate]);

    return (
        <div>
            {create && (
                <div>
                    <p>Enter name of contact</p>
                    <input
                        type='text'
                        value={contact}
                        onChange={handleChangeContact}
                    />
                    <button onClick={handleCreateChat}>Create</button>
                </div>
            )}
            <button onClick={toggleCreate}>
                {create ? 'End' : 'Create chat'}
            </button>
        </div>
    );
};
