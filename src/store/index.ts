import {
    configureStore,
    getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

import { rootReducer } from './slices';

const createStore = (reducer = {}) => {
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
        reducer,
    });
};

export const store = createStore(rootReducer);

export type Store = typeof store;
