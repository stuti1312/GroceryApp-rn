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
    deleteAddress(state, action) {
      let addressArray = state.data.filter(item => {
        return item.id != action.payload;
      });
      state.data = addressArray;
    },
    updateAddress(state, action) {
      let tempData = state.data;
      tempData.map(item => {
        if (item.id == action.payload.id) {
          item.cityName = action.payload.cityName;
          item.stateName = action.payload.stateName;
          item.streetName = action.payload.streetName;
          item.pincodeNo = action.payload.pincodeNo;
          item.addressType = action.payload.addressType;
        }
      });
      state.data = tempData;
    },
  },
});

export const {AddNewAddress, updateAddress, deleteAddress} =
  AddressSlice.actions;
export default AddressSlice.reducer;
