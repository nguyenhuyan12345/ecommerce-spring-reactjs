import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ProductService from '~/services/ProductService';

export const getTopCoatProducts = createAsyncThunk('topCoat/getTopCoatProducts', ProductService.getTopCoatProducts);

const topCoatSlice = createSlice({
    name: 'topCoats',
    initialState: {
        list: [],
        isLoading: false,
        hasError: false,
        status: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTopCoatProducts.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
                state.status = 'pending';
            })
            .addCase(getTopCoatProducts.fulfilled, (state, action) => {
                state.list = action.payload;
                state.isLoading = false;
                state.hasError = false;
                state.status = 'fulfilled';
            })
            .addCase(getTopCoatProducts.rejected, (state, action) => {
                state.hasError = true;
                state.isLoading = false;
                state.status = 'rejected';
            });
    }
});

export default topCoatSlice.reducer;
