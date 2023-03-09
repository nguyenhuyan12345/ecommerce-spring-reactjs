import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    login: false,
    accessToken: '',
    tokenType: '',
    fullName: '',
    avatar: '',
    role: ''
};

// export consst

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            const newState = state;
            newState.login = true;
            newState.accessToken = action.payload.accessToken;
            newState.tokenType = action.payload.tokenType;
            newState.fullName = action.payload.fullName;
            newState.avatar = action.payload.avatar;
            newState.role = action.payload.role;
            return newState;
        },

        logoutSuccess: (state) => {
            const newState = state;
            newState.login = false;
            newState.accessToken = '';
            newState.tokenType = '';
            newState.fullName = '';
            newState.avatar = '';
            return newState;
        }
    }
});

export const { loginSuccess, loginFalse, logoutSuccess } = auth.actions;

export default auth.reducer;
