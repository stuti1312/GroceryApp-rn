import {configureStore} from '@reduxjs/toolkit';
import ProductSlice from './slices/ProductSlice';

export const store = configureStore({
  reducer: {
    product: ProductSlice,
  },
});
