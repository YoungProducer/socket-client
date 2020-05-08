import { ChatList as ChatListComponent } from './Component';
import { container as chatListContainer } from './container';

export const ChatList =
    chatListContainer(ChatListComponent);
