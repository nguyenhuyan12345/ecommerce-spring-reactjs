import { configureStore } from '@reduxjs/toolkit';
import active from './slice/active';
import SideBar2ItemSlice from './slice/Sidebar2';

export const store = configureStore({
    reducer: {
        togle: active,
        ItemActive: SideBar2ItemSlice
    }
});
