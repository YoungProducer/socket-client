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
        chatSocket.instance.on('add-message-response', async (data: ChatSocket.Message) => {
            console.log(data);
            dispatch(addMessageAction({
                sender: data.sender,
                body: data.body,
            }));
        });
    };
