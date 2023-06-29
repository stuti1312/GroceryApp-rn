const {createSlice} = require('@reduxjs/toolkit');

const WishlistSliceReducer = createSlice({
  name: 'wishlist',
  initialState: {data: []},
  reducers: {
    addItemToWishlist(state, action) {
      let tempData = state.data;
      tempData.push(action.payload);
      state.data = tempData;
    },
  },
});

export const {addItemToWishlist} = WishlistSliceReducer.actions;

export default WishlistSliceReducer.reducer;
