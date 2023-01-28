import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { Icon } from "@rneui/base";

const data = [
  {
    id: "123",
    icon: "home",
    place: "Home",
    location: {
      lat: 35.802583,
      lng: 10.5943216,
    },
    destination: "Sousse Riadh, Sousse, Tunisia",
  },

  {
    id: "456",
    icon: "briefcase",
    place: "Work",
    location: {
      lat: 35.9035546,
      lng: 10.5437192,
    },
    destination: "Mall of Sousse, Sousse, Tunisia",
  },
];



const NavFavourites = () => {
  
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
      )}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={tw`flex-row p-5 items-center `}
          
          >
          <Icon
            style={tw`mr-5 rounded-full bg-gray-300 p-3 `}
            name={item.icon}
            type='ionicon'
            color='white'
            size={18}
          />
          <View>
            <Text style={tw` font-semibold`}>{item.place}</Text>
            <Text style={tw` text-gray-500`}>{item.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
