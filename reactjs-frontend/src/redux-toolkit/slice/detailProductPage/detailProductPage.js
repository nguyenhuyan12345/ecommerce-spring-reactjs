import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ProductService from '~/services/ProductService';

export const getDetailProductPage = createAsyncThunk(
    'detailProductPage/getDetailProductPage',
    ProductService.getDetailProductPageById
);

const detailProductPageSlice = createSlice({
    name: 'detailProductPage',
    initialState: {
        product: {},
        isLoading: false,
        hasError: false,
        status: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDetailProductPage.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
                state.status = 'pending';
            })
            .addCase(getDetailProductPage.fulfilled, (state, action) => {
                state.product = action.payload;
                state.isLoading = false;
                state.hasError = false;
                state.status = 'fulfilled';
            })
            .addCase(getDetailProductPage.rejected, (state, action) => {
                state.hasError = true;
                state.isLoading = false;
                state.status = 'rejected';
            });
    }
});

export default detailProductPageSlice.reducer;
