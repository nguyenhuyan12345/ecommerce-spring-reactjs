import { configureStore, createSerializableStateInvariantMiddleware } from '@reduxjs/toolkit';

// Import Reducer
import active from './slice/active';
import SideBar2ItemSlice from './slice/Sidebar2';
import auth from './slice/auth/auth';
// import thunk from 'redux-thunk';

// Import persist
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

const authPersistConfig = {
    key: 'auth',
    version: 1,
    storage
};

// const serializableMiddleware = createSerializableStateInvariantMiddleware({
//     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
// });

const persistedAuth = persistReducer(authPersistConfig, auth);

export const store = configureStore({
    reducer: {
        togle: active,
        ItemActive: SideBar2ItemSlice,
        auth: persistedAuth
        // devTools: process.env.NODE_ENV !== 'production',
        // middleware: [thunk],
        // middleware: [serializableMiddleware]
        // middleware: (getDefaultMiddleware) =>
        //     getDefaultMiddleware({
        //         serializableCheck: {
        //             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        //         }
        //     })

        // auth: auth
    }
});

export const persistor = persistStore(store); // export persistor
