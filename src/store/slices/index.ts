import { combineReducers } from '@reduxjs/toolkit';

import { chatListReducer } from './chat';

export const rootReducer = combineReducers({
    chatList: chatListReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
