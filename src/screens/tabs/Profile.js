import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomImage from '../../reusables/CustomImage';
import Colors from '../../constants/Colors';

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CustomImage
        imageSrc={require('../../assests/icons/userProfile.png')}
        imageStyle={styles.image}
      />
      <Text style={styles.name}>{'Stuti'}</Text>
      <Text style={[styles.name, {fontSize: 16}]}>
        {'stutisinghal1312@gmail.com'}
      </Text>
      <View style={styles.details}>
        <TouchableOpacity onPress={() => {}} style={styles.tabs}>
          <Text style={styles.headings}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.tabs}>
          <Text style={styles.headings}>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.tabs}>
          <Text style={styles.headings}>Addresses</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.tabs}>
          <Text style={styles.headings}>Payment Method</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.tabs}>
          <Text style={styles.headings}>LOGOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, backgroundColor: Colors.WHITE},
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 5,
  },
  name: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: '600',
    color: Colors.BLACK,
  },
  details: {marginVertical: 10},
  tabs: {
    width: '100%',
    height: 50,
    borderBottomWidth: 0.5,
    alignSelf: 'center',
    borderBottomColor: '#DBDBDB',
    justifyContent: 'center',
    paddingLeft: 20,
    marginTop:10
  },
  headings: {color: Colors.BLACK},
});
