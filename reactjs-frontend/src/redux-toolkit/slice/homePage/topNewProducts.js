import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ProductService from '~/services/ProductService';

export const getTopNewProducts = createAsyncThunk('topNewProducts/getTopNewProducts', ProductService.getTopNewProducts);

const getTopNewProductsSlice = createSlice({
    name: 'topNewProducts',
    initialState: {
        list: [],
        isLoading: false,
        hasError: false,
        status: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTopNewProducts.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
                state.status = 'pending';
            })
            .addCase(getTopNewProducts.fulfilled, (state, action) => {
                state.list = action.payload;
                state.isLoading = false;
                state.hasError = false;
                state.status = 'fulfilled';
            })
            .addCase(getTopNewProducts.rejected, (state, action) => {
                state.hasError = true;
                state.isLoading = false;
                state.status = 'rejected';
            });
    }
});

export default getTopNewProductsSlice.reducer;
