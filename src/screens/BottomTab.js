import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import CustomImage from '../reusables/CustomImage';
import Home from './tabs/Home';
import Search from './tabs/Search';
import Wishlist from './tabs/Wishlist';
import Notification from './tabs/Notification';
import Profile from './tabs/Profile';
import Colors from '../constants/Colors';

const BottomTab = props => {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabs = [
    {
      index: 0,
      tabIcon: require('../assests/icons/home.png'),
      tabIconFill: require('../assests/icons/home_fill.png'),
    },
    {
      index: 1,
      tabIcon: require('../assests/icons/search.png'),
      tabIconFill: require('../assests/icons/search_fill.png'),
    },
    {
      index: 2,
      tabIcon: require('../assests/icons/wishlist.png'),
      tabIconFill: require('../assests/icons/wishlist_fill.png'),
    },
    {
      index: 3,
      tabIcon: require('../assests/icons/bell.png'),
      tabIconFill: require('../assests/icons/bell_fill.png'),
    },
    {
      index: 4,
      tabIcon: require('../assests/icons/user.png'),
      tabIconFill: require('../assests/icons/user_fill.png'),
    },
  ];
  return (
    <>
      {selectedTab == 0 ? (
        <Home {...props} />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <Wishlist />
      ) : selectedTab == 3 ? (
        <Notification />
      ) : (
        <Profile />
      )}
      <View style={styles.bottomTabView}>
        {tabs.map(item => (
          <TouchableOpacity
            style={styles.bottomTabs}
            onPress={() => {
              setSelectedTab(item.index);
            }}
            key={item.index}>
            <CustomImage
              imageSrc={
                selectedTab === item.index ? item.tabIconFill : item.tabIcon
              }
              imageStyle={styles.imageStyle}
            />
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  bottomTabView: {
    position: 'absolute',
    backgroundColor: Colors.WHITE,
    bottom: 0,
    height: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomTabs: {
    height: '100%',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  imageStyle: {height: 24, width: 24},
});
