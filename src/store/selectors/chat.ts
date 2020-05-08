import { RootState } from 'store/slices';

export const selectSenders = (state: RootState) =>
    state.chat.chatList.map(chat => chat.sender);

export const selectChatList = (state: RootState) =>
    state.chat.chatList;
