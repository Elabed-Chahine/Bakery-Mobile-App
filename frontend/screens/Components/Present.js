import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import IconP from "./IconP";
import { useDispatch } from "react-redux";
import { update } from "../../features/Order/OrderSlice";
const Present = ({ image, name, price, number }) => {
  const[qte,setQte] = useState(0)
  const dispatch = useDispatch()

  const passOrder = (Qte, breadName, price,image) => {
    dispatch(
      update({
        id: Math.random() + 99,
        Qte: Qte,
        breadName: breadName,
        price: price*qte,
        image:image,
      })
    );
  };
  return (
    <View
      style={tw` mt-8 w-80 bg-gray-200 mb-6 flex justify-evenly rounded-full`}>
      <TouchableOpacity
        style={tw`absolute top-12 left-8 z-50 bg-gray-300 p-2 rounded-full shadow-lg `}
        onPress={() => {passOrder(qte, name, price,image);}}>
        <IconComponentProvider IconComponent={MaterialCommunityIcons}>
          <Icon name='cart' color='red' />
        </IconComponentProvider>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={[{ width: 80, height: 80 }, tw`-mt-6 ml-10 rounded-3xl `]}
          source={{ uri: image }}
        />
      </TouchableOpacity>
      <View style={tw`flex justify-center items-center`}>
        <View>
          <Text style={tw``}> {name}</Text>
          <Text style={tw`text-yellow-500`}>prix: {price}</Text>
        </View>
        <View style={tw`flex-row justify-evenly`}>
          <TouchableOpacity
            onPress={() => {
              setQte(qte + 1);
            }}
            style={[
              {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
              tw`w-6 h-6 bg-blue-900 rounded-full m-2 `,
            ]}>
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name={"plus"} size={22} color={"white"} />
            </IconComponentProvider>
          </TouchableOpacity>

          <Text style={tw`font-semibold mt-2`}>{qte}</Text>

          <TouchableOpacity
            onPress={() => {
              qte === 0 ? setQte(0) : setQte(qte - 1);
            }}
            style={[
              {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
              tw` w-6 h-6 bg-red-900 rounded-full m-2`,
            ]}>
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon name={"minus"} size={22} color={"white"} />
            </IconComponentProvider>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Present;
