import {configureStore} from '@reduxjs/toolkit';
import ProductSliceReducer from './slices/ProductSlice';
import WishlistSliceReducer from './slices/WishlistSlice';

export const store = configureStore({
  reducer: {
    product: ProductSliceReducer,
    wishlist: WishlistSliceReducer,
  },
});
