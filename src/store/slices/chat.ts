import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Chat {
    contact: string;
    messages: string[];
}

export namespace Chat {
    export interface Message {
        contact: string;
        body: string;
    }

    export type SetPayload = Chat[];
    export type AddPayload = Message;
    export type JoinPayload = string;

    export interface State {
        chatList: Chat[];
        joined: boolean;
        userId: string;
    }
}

const initialState: Chat.State = {
    chatList: [],
    joined: false,
    userId: null,
};

const chat = createSlice({
    initialState,
    name: 'Chat',
    reducers: {
        joinAction: (
            state: Chat.State,
            { payload }: PayloadAction<Chat.JoinPayload>,
        ) => ({
            ...state,
            joined: true,
            userId: payload,
        }),
        setChatListAction: (
            state: Chat.State,
            { payload }: PayloadAction<Chat.SetPayload>,
        ) => ({
            ...state,
            chatList: payload,
        }),
        addMessageAction: (
            state: Chat.State,
            { payload }: PayloadAction<Chat.Message>,
        ) => {
            const isChatExist = state.chatList.some(chat =>
                chat.contact === payload.contact);

            if (isChatExist) {
                return {
                    ...state,
                    chatList: state.chatList.map(chat => {
                        if (chat.contact === payload.contact) {
                            return {
                                ...chat,
                                messages: [...chat.messages, payload.body],
                            };
                        }

                        return chat;
                    }),
                };
            }

            return {
                ...state,
                chatList: [
                    ...state.chatList,
                    {
                        contact: payload.contact,
                        messages: [payload.body],
                    },
                ],
            };
        },
    },
});

export const {
    joinAction,
    addMessageAction,
    setChatListAction,
} = chat.actions;

export const chatReducer = chat.reducer;
