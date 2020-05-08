import { RootState } from 'store/slices';

export const selectSenders = (state: RootState) =>
    state.chatList.chatList.map(chat => chat.sender);

export const selectChatList = (state: RootState) =>
    state.chatList.chatList;
