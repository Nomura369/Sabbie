import {configureStore} from '@reduxjs/toolkit';
import accountReducer from "./accountSlice";
import questionSlice from './questionSlice';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from "redux-thunk";

const persistConfig={
    key:'root',
    storage: AsyncStorage,
}

export const store = configureStore({
    reducer:{
        account:persistReducer(persistConfig,accountReducer),
        question:persistReducer(persistConfig,questionReducer),
    },
    
    devTools:process.env.NODE_ENV !=='production',
    middleware: [thunk]
});

persistStore(store);