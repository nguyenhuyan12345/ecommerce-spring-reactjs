import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    login: false,
    accessToken: '',
    tokenType: '',
    fullName: '',
    avatar: ''
};

// export consst

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, loginData) => {
            const newState = state;
            newState.login = true;
            newState.accessToken = loginData.payload.accessToken;
            newState.tokenType = loginData.payload.tokenType;
            newState.fullName = loginData.payload.fullName;
            newState.avatar = loginData.payload.avatar;
            return newState;
        },

        // loginFalse: (state) => {
        //     const newState = state;
        //     newState.login = false;
        //     newState.accessToken = '';
        //     newState.tokenType = '';
        //     return newState;
        // },
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
