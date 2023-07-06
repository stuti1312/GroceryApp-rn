import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
// import uuid from 'react-native-uuid';
import {useDispatch} from 'react-redux';
import {AddNewAddress} from '../redux/slices/AddressSlice';
import CustomHeader from '../reusables/CustomHeader';
import CustomInput from '../reusables/CustomInput';
import CustomImage from '../reusables/CustomImage';
import CustomButton from '../reusables/CustomButton';
import Colors from '../constants/Colors';

const AddAddress = ({navigation}) => {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [street, setStreet] = useState('');
  const [pincode, setPincode] = useState('');
  const [selectedTab, setselectedTab] = useState(0);
  const dispatch = useDispatch();
  const addressType = [
    {type: 'Home', index: 0},
    {type: 'Work', index: 1},
    {type: 'Other', index: 2},
  ];
  return (
    <View style={styles.container}>
      <CustomHeader
        title={'Add Address'}
        leftIcon={require('../assests/icons/backArrow.png')}
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.screen}>
        <CustomInput
          placeholderText={'Enter your Street'}
          inputValue={street}
          onInputChange={text => {
            setStreet(text);
          }}
          inputStyle={styles.input}
        />
        <CustomInput
          placeholderText={'Enter your City'}
          inputValue={city}
          onInputChange={text => {
            setCity(text);
          }}
          inputStyle={styles.input}
        />
        <CustomInput
          placeholderText={'Enter your State'}
          inputValue={state}
          onInputChange={text => {
            setState(text);
          }}
          inputStyle={styles.input}
        />
        <CustomInput
          placeholderText={'Enter your Pincode'}
          inputValue={pincode}
          onInputChange={text => {
            setPincode(text);
          }}
          inputStyle={styles.input}
        />
        <View style={styles.selectedTab}>
          {addressType.map(item => (
            <TouchableOpacity
              style={[
                styles.btn,
                {
                  borderColor:
                    selectedTab == item.index
                      ? Colors.SKYBLUE
                      : Colors.LIGHT_GREY,
                },
              ]}
              onPress={() => {
                setselectedTab(item.index);
              }}
              key={item.index}>
              <CustomImage
                imageSrc={
                  selectedTab === item.index
                    ? require('../assests/icons/radio_fill.png')
                    : require('../assests/icons/radio.png')
                }
                imageStyle={[
                  styles.radio,
                  {
                    tintColor:
                      selectedTab === item.index
                        ? Colors.SKYBLUE
                        : Colors.BLACK,
                  },
                ]}
              />
              <Text style={styles.type}>{item.type}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <CustomButton
          title={'Save Address'}
          onClick={() => {
            dispatch(
              AddNewAddress({
                stateName: state,
                cityName: city,
                streetName: street,
                pincodeNo: pincode,
                addressType:
                  selectedTab == 0
                    ? 'Home'
                    : selectedTab == 1
                    ? 'Work'
                    : 'Other',
                // id: uuid.v4(),
              }),
            );
            navigation.goBack();
          }}
          btnStyle={styles.saveBtn}
          btnTextStyle={styles.save}
        />
      </View>
    </View>
  );
};

export default AddAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  screen: {margin: 20},
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: Colors.LIGHT_GREY,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  selectedTab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btn: {
    width: '30%',
    height: 45,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.LIGHT_GREY,
    flexDirection: 'row',
    alignItems: 'center',
  },
  type: {fontSize: 18, color: Colors.BLACK, alignSelf: 'center'},
  radio: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
  },
  saveBtn: {
    width: '100%',
    height: 60,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.SKYBLUE,
  },
  save: {fontSize: 20, color: Colors.WHITE, alignSelf: 'center'},
});
