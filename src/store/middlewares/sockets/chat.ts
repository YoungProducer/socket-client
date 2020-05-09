import { Middleware, PayloadAction } from '@reduxjs/toolkit';

import { chatSocket } from 'components/ChatWatcher/Socket';
import { Chat, setChatListAction } from 'store/slices/chat';
import { RootState } from 'store/slices';
import { initChatEvents } from 'store/thunks/chat';

export const chatMiddleware: Middleware =
    (store) => (next) => async (action: PayloadAction<Chat.JoinPayload>) => {
        next(action);

        if (action.type === 'Chat/joinAction') {
            chatSocket.join(action.payload);

            chatSocket.instance.on('join-response', (data: { status: string }) => {
                if (data.status === 'Success!') {
                    store.dispatch(initChatEvents() as any);

                    const state: RootState = store.getState();

                    chatSocket.chatList(state.chat.userId);
                }
            });

        }
    };
