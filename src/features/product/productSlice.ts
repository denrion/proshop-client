import { createSlice } from '@reduxjs/toolkit';

import { listProductDetails, listProducts } from './productThunks';
import { IProduct } from './IProduct';
import { RequestStatus } from '../../app/types/request';

interface ProductState {
  status: RequestStatus;
  error: string | null | undefined;
  products: IProduct[];
  product: IProduct | null;
}

const initialState: ProductState = {
  status: RequestStatus.IDLE,
  error: null,
  products: [],
  product: null,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // LIST PRODUCTS
    builder.addCase(listProducts.pending, (state) => {
      state.status = RequestStatus.LOADING;
    });
    builder.addCase(listProducts.fulfilled, (state, action) => {
      state.status = RequestStatus.IDLE;
      state.products = action.payload.items;
      state.error = null;
    });
    builder.addCase(listProducts.rejected, (state, action) => {
      state.status = RequestStatus.FAILED;
      state.error = action.payload?.message ?? action.error.message;
    });

    // LIST PRODUCT DETAILS
    builder.addCase(listProductDetails.pending, (state) => {
      state.status = RequestStatus.LOADING;
    });
    builder.addCase(listProductDetails.fulfilled, (state, action) => {
      state.status = RequestStatus.IDLE;
      state.product = action.payload;
      state.error = null;
    });
    builder.addCase(listProductDetails.rejected, (state, action) => {
      state.status = RequestStatus.FAILED;
      state.error = action.payload?.message ?? action.error.message;
    });
  },
});

export default productSlice.reducer;
