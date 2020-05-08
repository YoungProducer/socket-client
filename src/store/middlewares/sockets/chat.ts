import { Middleware, PayloadAction } from '@reduxjs/toolkit';
import { Socket } from 'components/MessagesWatcher/Socket';
import { Chat } from 'store/slices/chat';

const socket = new Socket();

export const chatMiddleware: Middleware =
    (store) => (next) => async (action: PayloadAction<Chat.JoinPayload>) => {
        next(action);

        if (action.type === 'Chat/joinAction') {
            socket.join(action.payload);
        }
    };
