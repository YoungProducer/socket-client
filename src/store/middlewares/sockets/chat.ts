import { Middleware, PayloadAction } from '@reduxjs/toolkit';
import { Socket } from 'components/MessagesWatcher/Socket';
import { Chat, setChatListAction } from 'store/slices/chat';
import { RootState } from 'store/slices';

const socket = new Socket();

export const chatMiddleware: Middleware =
    (store) => (next) => async (action: PayloadAction<Chat.JoinPayload>) => {
        next(action);

        if (action.type === 'Chat/joinAction') {
            socket.join(action.payload);

            socket.instance.on('join-response', (data: { status: string }) => {
                if (data.status === 'Success!') {
                    const state: RootState = store.getState();

                    socket.chatList(state.chatList.userId);

                    socket.instance.on('chat-list-response', (data: Chat[]) => {
                        store.dispatch(setChatListAction(data));
                    });
                }
            });

        }
    };
