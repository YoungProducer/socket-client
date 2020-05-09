import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserMessage {
    body: string;
    owner: string;
}

export interface Chat {
    contact: string;
    messages: UserMessage[];
}

export namespace Chat {
    export interface Message {
        contact: string;
        owner: string;
        body: string;
    }

    export type SetChatsPayload = Chat[];
    export type AddChatPayload = Chat[];
    export type AddMessagePayload = Message;
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
            { payload }: PayloadAction<Chat.SetChatsPayload>,
        ) => ({
            ...state,
            chatList: payload,
        }),
        addChatAction: (
            state: Chat.State,
            { payload }: PayloadAction<Chat.AddChatPayload>,
        ) => ({
            ...state,
            chatList: state.chatList.concat(payload),
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
                                messages: [...chat.messages, {
                                    body: payload.body,
                                    owner: payload.owner,
                                }],
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
                        messages: [{
                            body: payload.body,
                            owner: payload.owner,
                        }],
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
    addChatAction,
} = chat.actions;

export const chatReducer = chat.reducer;
