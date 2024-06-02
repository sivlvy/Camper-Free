import { createSlice } from '@reduxjs/toolkit';

import { getFilteredProducts, getProducts } from './products-operations';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        isLoadMore: false,
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) =>
        builder
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload?.length
                    ? [...state.products, ...action.payload]
                    : state.products;
                state.isLoadMore = action.payload.length === 4;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(getFilteredProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getFilteredProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.isLoadMore = false;
                state.isLoading = false;
                state.error = null;
                if (action.payload.length) {
                    state.error = null;
                    state.isEmptyResultFilter = false;
                } else {
                    state.error = 'Not Found';
                    state.isEmptyResultFilter = true;
                }
            })
            .addCase(getFilteredProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            }),
});

export default productsSlice.reducer;
