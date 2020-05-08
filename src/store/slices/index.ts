import { combineReducers } from '@reduxjs/toolkit';

import { chatReducer } from './chat';

export const rootReducer = combineReducers({
    chat: chatReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
