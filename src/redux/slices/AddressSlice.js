const {createSlice} = require('@reduxjs/toolkit');

const AddressSlice = createSlice({
  name: 'address',
  initialState: {
    data: [],
  },
  reducers: {
    AddNewAddress(state, action) {
      let tempData = state.data;
      tempData.push(action.payload);
      state.data = tempData;
    },
    // deleteAddress(state, action) {
    //   let addressArray = state.data.filter(item => {
    //     return item.id !== action.payload;
    //   });
    //   state.data = addressArray;
    // },
  },
});

export const {
  AddNewAddress,
  // deleteAddress
} = AddressSlice.actions;
export default AddressSlice.reducer;
