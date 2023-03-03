import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ProductService from '~/services/ProductService';

export const getProducts = createAsyncThunk('newProducts/getProducts', ProductService.getNewProducts);

const newProductsSlice = createSlice({
    name: 'newProducts',
    initialState: {
        list: [],
        isLoading: false,
        hasError: false,
        status: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
                state.status = 'pending';
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.list = action.payload;
                state.isLoading = false;
                state.hasError = false;
                state.status = 'fulfilled';
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.hasError = true;
                state.isLoading = false;
                state.status = 'rejected';
            });
    }
});

// Selectors
// export const selectNewProduct = (state) => state.newProducts.list;
// export const selectLoadingState = (state) => state.newProducts.isLoading;
// export const selectErrorState = (state) => state.newProducts.hasError;

export default newProductsSlice.reducer;
