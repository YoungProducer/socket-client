import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export namespace Chat {
    export interface Message {
        sender: string;
        body: string;
    }
}

export interface Chat {
    sender: string;
    messages: string[];
}

export namespace ChatList {
    export type SetPayload = Chat[];
    export type AddPayload = Chat.Message;

    export interface State {
        chatList: Chat[];
    }
}

const initialState: ChatList.State = {
    chatList: [],
};

const chatList = createSlice({
    initialState,
    name: 'ChatList',
    reducers: {
        setChatListAction: (
            state: ChatList.State,
            { payload }: PayloadAction<ChatList.SetPayload>,
        ) => ({
            ...state,
            chatList: payload,
        }),
        addMessageAction: (
            state: ChatList.State,
            { payload }: PayloadAction<Chat.Message>,
        ) => {
            const isChatExist = state.chatList.some(chat =>
                chat.sender === payload.sender);

            if (isChatExist) {
                return {
                    ...state,
                    chatList: state.chatList.map(chat => {
                        if (chat.sender === payload.sender) {
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
                        sender: payload.sender,
                        messages: [payload.body],
                    },
                ],
            };
        },
    },
});

export const {
    addMessageAction,
    setChatListAction,
} = chatList.actions;

export const chatListReducer = chatList.reducer;
