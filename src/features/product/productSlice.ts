import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IPaginatedResponse } from '../../app/types/response';
import { IProduct } from './types/product';

interface ProductState {
  products: IProduct[];
  product: IProduct | null;
}

const initialState: ProductState = {
  products: [],
  product: null,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    listProducts(state, action: PayloadAction<IPaginatedResponse<IProduct>>) {
      state.products = action.payload.items;
    },
    listProductDetails(state, action) {
      state.product = action.payload;
    },
  },
});

export const { listProducts, listProductDetails } = productSlice.actions;

export default productSlice.reducer;
