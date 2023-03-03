import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ProductService from '~/services/ProductService';

export const getTopSellingProducts = createAsyncThunk(
    'topSelling/getTopSellingProducts',
    ProductService.getTopSellingProducts
);

const topSellingProductsSlice = createSlice({
    name: 'topSelling',
    initialState: {
        list: [],
        isLoading: false,
        hasError: false,
        status: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTopSellingProducts.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
                state.status = 'pending';
            })
            .addCase(getTopSellingProducts.fulfilled, (state, action) => {
                state.list = action.payload;
                state.isLoading = false;
                state.hasError = false;
                state.status = 'fulfilled';
            })
            .addCase(getTopSellingProducts.rejected, (state, action) => {
                state.hasError = true;
                state.isLoading = false;
                state.status = 'rejected';
            });
    }
});

export default topSellingProductsSlice.reducer;
