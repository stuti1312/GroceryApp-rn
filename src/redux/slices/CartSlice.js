const {createSlice} = require('@reduxjs/toolkit');

const CartSliceReducer = createSlice({
  name: 'cart',
  initialState: {
    data: [],
  },
  reducers: {
    addToCart(state, action) {
      let tempData = state.data;
      let isNewItem = false;
      tempData.map(itm => {
        if (itm.id === action.payload.id) {
          isNewItem = true;
          itm.qty += 1;
        }
      });
      if (!isNewItem) {
        tempData.push(action.payload);
      }
      state.data = tempData;
    },
    reduceItemQtyInCart(state, action) {
      let tempData = state.data;
      tempData.map(itm => {
        if (itm.id === action.payload.id) {
          if (itm.qty > 1) {
            itm.qty -= 1;
          }
        }
      });
      state.data = tempData;
    },
    removeItemFromCart(state, action) {
      let tempData = state.data;
      tempData.splice(action.payload, 1);
      state.data = tempData;
    },
    emptyCart(state, action) {
      state.data = [];
    },
  },
});

export const {addToCart, reduceItemQtyInCart, removeItemFromCart, emptyCart} =
  CartSliceReducer.actions;
export default CartSliceReducer.reducer;
