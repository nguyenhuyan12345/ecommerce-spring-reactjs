import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeID: 1
};

export const SideBar2ItemSlice = createSlice({
    name: 'SideBar2ItemSlice',
    initialState,
    reducers: {
        setActiveItem: (state, activeID) => {
            const newState = state;
            if (activeID.payload) {
                newState.activeID = activeID.payload;
                return newState;
            } else {
                return newState;
            }
        }
    }
});

export const { setActiveItem, setItemList } = SideBar2ItemSlice.actions;

export default SideBar2ItemSlice.reducer;
