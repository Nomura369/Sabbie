import thunk from "redux-thunk";
import {configureStore} from '@reduxjs/toolkit';
import accountReducer from "./accountSlice";
import questionReducer from './questionSlice';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig={
    key:'root',
    storage: AsyncStorage,
}

export default store = configureStore({
    reducer:{
        account: (persistConfig, accountReducer),
        question: (persistConfig, questionReducer),
    },

    devTools:process.env.NODE_ENV !=='production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
});

persistStore(store);