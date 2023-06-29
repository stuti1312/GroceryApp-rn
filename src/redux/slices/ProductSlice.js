const {createSlice} = require('@reduxjs/toolkit');

const ProductSliceReducer = createSlice({
  name: 'products',
  initialState: {
    data: null,
    isLoading: false,
  },
  reducers: {
    addProducts(state, action) {
      state.data = action.payload;
    },
  },
});

export const {addProducts} = ProductSliceReducer.actions;

export default ProductSliceReducer.reducer;
