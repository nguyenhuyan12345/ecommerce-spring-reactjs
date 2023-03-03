import { configureStore } from '@reduxjs/toolkit';

// Import Reducer
import active from './slice/active';
import SideBar2ItemSlice from './slice/Sidebar2';
import auth from './slice/auth/auth';
import newProducts from './slice/homePage/testCallApi';
import topSelling from './slice/homePage/topSelling';

// Import persist
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

const authPersistConfig = {
    key: 'auth',
    version: 1,
    storage
};

// Redux persist
const persistedAuth = persistReducer(authPersistConfig, auth);

export const store = configureStore({
    reducer: {
        togle: active,
        ItemActive: SideBar2ItemSlice,
        auth: persistedAuth,
        newProducts: newProducts,
        topSelling: topSelling
    }
});

export const persistor = persistStore(store); // export persistor
