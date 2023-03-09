import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ProductService from '~/services/ProductService';

// extra reducer
export const getTopOrderProducts = createAsyncThunk(
    'topOrders/getTopOrderProducts',
    ProductService.getTopOrderProducts
);

const getTopOrderProductsSlice = createSlice({
    name: 'topOrders',
    initialState: {
        list: [],
        isLoading: false,
        hasError: false,
        status: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTopOrderProducts.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
                state.status = 'pending';
            })
            .addCase(getTopOrderProducts.fulfilled, (state, action) => {
                state.list = action.payload;
                state.isLoading = false;
                state.hasError = false;
                state.status = 'fulfilled';
            })
            .addCase(getTopOrderProducts.rejected, (state, action) => {
                state.hasError = true;
                state.isLoading = false;
                state.status = 'rejected';
            });
    }
});

export default getTopOrderProductsSlice.reducer;
