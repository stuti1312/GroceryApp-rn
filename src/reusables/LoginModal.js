import {
  Dimensions,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
import CustomButton from './CustomButton';
import CustomImage from './CustomImage';

const LoginModal = ({
  isVisible,
  onClickLogin,
  onClickSignup,
  onClickCancel,
}) => {
  return (
    <Modal visible={isVisible} transparent>
      <View style={styles.transparentView}>
        <View style={styles.contentView}>
          <TouchableOpacity
            style={styles.cancelBtn}
            onPress={() => {
              onClickCancel();
            }}>
            <CustomImage
              imageSrc={require('../assests/icons/cancel.png')}
              imageStyle={styles.icon}
            />
          </TouchableOpacity>
          <View style={styles.buttons}>
            <CustomButton
              title={'Login'}
              onClick={() => {
                onClickLogin();
              }}
              btnStyle={styles.btnStyle}
              btnTextStyle={styles.btnTextStyle}
            />
            <CustomButton
              title={'Create Account'}
              onClick={() => {
                onClickSignup();
              }}
              btnStyle={styles.btnStyle}
              btnTextStyle={styles.btnTextStyle}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LoginModal;

const styles = StyleSheet.create({
  transparentView: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentView: {
    backgroundColor: Colors.WHITE,
    width: '90%',
    height: 200,
    borderRadius: 10,
  },
  buttons: {marginTop: 20},
  btnStyle: {
    backgroundColor: Colors.SKYBLUE,
    width: Dimensions.get('window').width - 90,
  },
  btnTextStyle: {color: Colors.WHITE, fontSize: 18},
  cancelBtn: {position: 'absolute', right: 5, top: 5},
  icon: {width: 30, height: 30, tintColor: Colors.BLACK},
});
