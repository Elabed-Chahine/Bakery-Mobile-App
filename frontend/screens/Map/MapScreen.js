import {
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "twrnc";
import Map from "./Map";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import RideOptionsCard from "./RideOptionsCard";
import CheckoutFooter from "../Checkout/Components/CheckoutFooter";
/*<Map /> */
const MapScreen = () => {
  const stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={tw`absolute top-12 left-8 z-50 bg-gray-300 p-2 rounded-full shadow-lg `}
        onPress={() => navigation.navigate("/")}>
        <Icon name='menu' />
      </TouchableOpacity>
      <View style={tw`h-1/2`}>
        <Map />
      </View>

      <View style={tw`h-1/2`}>
        <stack.Navigator>
          <stack.Screen
            name='RideOptionsCard'
            component={RideOptionsCard}
            options={{ headerShown: false }}
          />
          <stack.Screen
            name='Checkout'
            component={CheckoutFooter}
            options={{ headerShown: false }}
          />
        </stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
