import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ProductService from '~/services/ProductService';
import axios from 'axios';
import { API_BASE_URL } from '~/constants/api';

export const getTopSaleProduct = createAsyncThunk(
    'topSaleProduct/getTopSaleProduct',
    ProductService.getTopSaleProduct
    // async (data, { rejectWithValue }) => {
    //     console.log(data);
    //     try {
    //         const res = await axios.get(API_BASE_URL + '/products/list/top-sale', {
    //             params: {
    //                 page: data.page,
    //                 perPage: data.perPage
    //             }
    //         });
    //         return res.data;
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }
);

const topSaleProduct = createSlice({
    name: 'topSaleProduct',
    initialState: {
        list: [],
        isLoading: false,
        hasError: false,
        status: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTopSaleProduct.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
                state.status = 'pending';
            })
            .addCase(getTopSaleProduct.fulfilled, (state, action) => {
                state.list = action.payload;
                state.isLoading = false;
                state.hasError = false;
                state.status = 'fulfilled';
            })
            .addCase(getTopSaleProduct.rejected, (state, action) => {
                state.hasError = true;
                state.isLoading = false;
                state.status = 'rejected';
            });
    }
});

export default topSaleProduct.reducer;
