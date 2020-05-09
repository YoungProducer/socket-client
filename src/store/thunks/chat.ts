import { Dispatch } from '@reduxjs/toolkit';

import { ChatSocket } from 'components/ChatWatcher/Socket';
import { RootState } from 'store/slices';
import { addMessageAction } from 'store/slices/chat';

const socket = new ChatSocket();
const io = socket.instance;

type EmitSendMessage =
    (message: Omit<ChatSocket.Message, 'sender'>) =>
        (dispatch: Dispatch<any>, getState: () => RootState) =>
            Promise<void>;

export const emitSendMessage: EmitSendMessage = (message) =>
    async (dispatch, getState) => {
        const state = getState();
        const sender = state.chat.userId;

        socket.sendMessage({
            ...message,
            sender,
        });

        io.on('add-message-response', async (data: ChatSocket.Message) => {
            console.log(data);
        });
    };
