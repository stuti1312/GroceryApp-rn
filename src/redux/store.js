import {configureStore} from '@reduxjs/toolkit';
import ProductSliceReducer from './slices/ProductSlice';
import WishlistSliceReducer from './slices/WishlistSlice';
import CartSliceReducer from './slices/CartSlice';
import AddAddressReducer from './slices/AddressSlice';
import orderItemReducer from './slices/OrderSlice';

export const store = configureStore({
  reducer: {
    product: ProductSliceReducer,
    wishlist: WishlistSliceReducer,
    cart: CartSliceReducer,
    address: AddAddressReducer,
    order: orderItemReducer,
  },
});
