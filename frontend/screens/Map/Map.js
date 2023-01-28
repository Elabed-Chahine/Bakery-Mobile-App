import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "twrnc";
import { useDispatch, useSelector } from "react-redux";
//latitude: origin.location.lat,
//   longitude: origin.location.lng,

const Map = () => {

  const mapRef = useRef(null);
  const dispatch = useDispatch();

  
  

  
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        
        showsUserLocation={true}
      />
    </View>
  );
};

export default Map;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});