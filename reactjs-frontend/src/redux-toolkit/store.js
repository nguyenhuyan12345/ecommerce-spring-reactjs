import { configureStore } from '@reduxjs/toolkit';

// Import Reducer
import active from './slice/active';
import SideBar2ItemSlice from './slice/Sidebar2';
import auth from './slice/auth/auth';
import topNewProducts from './slice/homePage/topNewProducts';
import topOrders from './slice/homePage/topOrders';
import topCoats from './slice/homePage/topCoats';
import newProducts from './slice/newProductPage/newProductPage';
import products from './slice/productPage/productPage';
import sellingProducts from './slice/sellingProductPage/sellingProductPage';
import topSaleProduct from './slice/salePage/salePage';

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
        topNewProducts,
        topOrders,
        topCoats,
        newProducts,
        products,
        sellingProducts,
        topSaleProduct
    }
});

export const persistor = persistStore(store); // export persistor
