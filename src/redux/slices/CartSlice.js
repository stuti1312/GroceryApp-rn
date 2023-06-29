const {createSlice} = require('@reduxjs/toolkit');

const CartSliceReducer = createSlice({
  name: 'cart',
  initialState: {
    data: [],
  },
  reducers: {
    addToCart(state, action) {
      let tempData = state.data;
      tempData.push(action.payload);
      state.data = tempData;
    },
  },
});

export const {addToCart} = CartSliceReducer.actions;
export default CartSliceReducer.reducer;
