import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import todoReducer from './todos'
import persistStore from "redux-persist/es/persistStore";
import { nonSerializableMiddleware } from "./reduxMiddleware";

const persistConfig = {
    key: 'todos',
    storage,
};

const persistedReducer = persistReducer(persistConfig, todoReducer)

export const store = configureStore({
    reducer: {
        todos: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(nonSerializableMiddleware),
})

export const persistor = persistStore(store)
