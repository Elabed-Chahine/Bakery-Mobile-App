import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {} from "react-native-web";
import tw from 'twrnc';
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const data = [
  {
    id: "123",
    title: "Delivery Options",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: " Choose your chef",
    image: "https://i.postimg.cc/qB2bYw09/people.png",
    screen: "PeopleScreen",
  },
];

const NavOption = () => {
  const navigation = useNavigation();
 const {user}= useSelector((state)=>state.auth)
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={tw` p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 ${
            !user && "opacity-20"
          }`}
          disabled={!user}
          onPress={() => navigation.navigate(item.screen)}>
          <View //</TouchableOpacity>style={tw`${!origin && "opacity-20"}`}
          >
            <Image
              style={{ height: 120, width: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 font-semibold text-lg text-center `}>
              {item.title}
            </Text>
            <Icon
              style={tw`bg-black rounded-full w-10 p-2`}
              name='arrowright'
              color='white'
              type='antdesign'
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOption;

const styles = StyleSheet.create({});
