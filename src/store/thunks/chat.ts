import { Dispatch } from '@reduxjs/toolkit';

import { chatSocket, ChatSocket } from 'components/ChatWatcher/Socket';
import { RootState } from 'store/slices';
import { addMessageAction } from 'store/slices/chat';

type EmitSendMessage =
    (message: Omit<ChatSocket.Message, 'sender'>) =>
        (dispatch: Dispatch<any>, getState: () => RootState) =>
            Promise<void>;

export const emitSendMessage: EmitSendMessage = (message) =>
    async (dispatch, getState) => {
        const state = getState();
        const sender = state.chat.userId;

        chatSocket.sendMessage({
            ...message,
            sender,
        });
    };

export const initChatEvents = () =>
    async (dispatch: Dispatch<any>) => {
        chatSocket.instance.on(
            'add-message-response',
            async (incomingMessage: ChatSocket.IncomingMessage,
            ) => {
                const messageData = incomingMessage.data;
                const messageStatus = incomingMessage.status;

                dispatch(addMessageAction({
                    contact: messageStatus === 'Sent!'
                        ? messageData.receiver
                        : messageData.sender,
                    body: messageData.body,
                }));
            });
    };
