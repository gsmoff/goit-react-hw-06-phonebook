import { configureStore } from '@reduxjs/toolkit';
import { contactsReduser } from './contacts/contactsSlice';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'contacts',
    storage,
};

const persistedReducer = persistReducer(persistConfig, contactsReduser);

export const store = configureStore({
    reducer: persistedReducer
        
});

export const persistor = persistStore(store);
