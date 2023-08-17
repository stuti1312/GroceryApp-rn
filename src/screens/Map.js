import {View, Text} from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';

const Map = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'pink'}}>
      <Text>Map</Text>
      <MapView
        style={{height: "95%", width: "100%",backgroundColor:"red"}}
        initialRegion={{
          latitude: 28.679079, // latitude position of map for 1st time map opening
          longitude: 77.069710, // longitutde position of map for 1st time map opening
          latitudeDelta: 0.5, // zoomed latitude position of map
          longitudeDelta: 0.5, // zoomed longitude position of map
        }}
      />
    </View>
  );
};

export default Map;
