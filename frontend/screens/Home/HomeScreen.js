import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import NavOption from "./NavOption";
import NavFavourites from "./NavFavourites";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import Svg, { Path } from "react-native-svg";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [refresh, setRefresh] = useState(null);


  const align = true;
  return (
    <View style={tw`bg-white h-full `}>
      <View style={styles.top}>
        <View style={styles.box}>
          <Svg
            height={200}
            width={Dimensions.get("screen").width}
            viewBox='0 0 1440 320'
            style={styles.topWavy}>
            <Path
              fill='black'
              d='M0,192L60,170.7C120,149,240,107,360,112C480,117,600,171,720,197.3C840,224,960,224,1080,208C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'
            />
          </Svg>
        </View>
      </View>
      <View style={tw`p-5`}>
        <Text style={tw`font-semibold text-2xl px-6 py-8`}>Order Food</Text>
        
        
        <NavOption />
        <NavFavourites />
      </View>
      <View
        style={{
          width: 400,
          height: 30,
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Text
          style={{
            color: "white",
            fontSize: 18,

            marginRight: 10,
          }}>
          Restaurants you might Wanna check
        </Text>
      </View>
     
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  top: {},
  bottom: {
    position: "absolute",
    width: Dimensions.get("screen").width,
    bottom: 0,
  },
  box: {
    backgroundColor: "black",
    height: 80,
  },
  bottomWavy: {
    position: "absolute",
    bottom: 20,
  },
});
