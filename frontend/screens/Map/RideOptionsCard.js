import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { pay } from "../../features/Order/OrderSlice";
import { useDispatch } from "react-redux";
  const value = 500;
const data = [
  {
    id: "Normal Delivery",
    Time: "30 mins",
    title: "normal delivery",
    price: value * 1.5 ,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Fast-X",
    Time: "20 mins",
    title: "Fast-X",
    price: value * 1.5 * 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Super-Fast",
    Time: "10 mins",
    title: "Super-fast",
    price: value * 1.5 * 1.5,
    image: "https://links.papareact.com/7pf",
  },
];

const RideOptionsCard = () => {
  const Time = "30 mins"

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(null);
  return (
    <SafeAreaView style={tw` flex-1 bg-white`}>
      <View style={tw`border-b border-gray-200`}>
        <TouchableOpacity
          style={tw`absolute top-3 left-5 p-3 rounded-full z-50 `}
          onPress={() => navigation.navigate("/")}>
          <Icon name='chevron-left' type='font-awesome' />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>
          {" "}
          Select a Ride - {Time}
        </Text>
      </View>

      <FlatList
        data={data}
        KeyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              onPress={() => {
                setSelected(item);
              }}
              style={tw`flex flex-row items-center justify-around px-4 ${
                item.id === selected?.id && "bg-gray-200"
              }`}>
              <Image
                style={{ height: 100, width: 100, resizeMode: "contain" }}
                source={{ uri: item.image }}
              />
              <View style={tw`mt-2`}>
                <Text style={tw`font-bold text-lg`}>{item.title}</Text>
                <Text>travel time {item.Time}</Text>
              </View>
              <Text>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "TND",
                }).format((item.price) / 100)}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={tw`border-t-2 border-gray-300 mt-auto`}>
        <TouchableOpacity
          onPress={() => {
            dispatch(pay(selected));
            navigation.navigate("Checkout");
          }}
          disabled={!selected}
          style={tw`bg-black py-2 ${!selected && "bg-gray-300"}`}>
          <Text style={tw`text-center text-white text-lg font-semibold`}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
