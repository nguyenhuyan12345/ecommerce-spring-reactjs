import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    active1: true,
    active2: false
};

export const active = createSlice({
    name: 'active',
    initialState,
    reducers: {
        show1: (state) => {
            const newState = state;
            newState.active1 = true;
            newState.active2 = false;
            return newState;
        },
        show2: (state) => {
            const newState = state;
            newState.active1 = false;
            newState.active2 = true;
            return newState;
        }
    }
});

// Action creators are generated for each case reducer function
export const { show1, show2 } = active.actions;

export default active.reducer;
