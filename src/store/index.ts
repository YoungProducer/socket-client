import {
    configureStore,
    getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

const createStore = (rootReducer = {}) => {
    const defaultMiddleware = getDefaultMiddleware({
        thunk: true,
        immutableCheck: true,
        serializableCheck: true,
    });

    const logger = createLogger({
        collapsed: true,
        diff: true,
    });

    const middleware = [
        ...defaultMiddleware,
        logger,
    ];

    return configureStore({
        middleware,
        reducer: rootReducer,
    });
};

export const store = createStore();

export type Store = typeof store;
