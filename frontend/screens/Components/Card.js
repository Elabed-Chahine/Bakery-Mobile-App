import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import IconP from './IconP';
const Card = ({image,name,price,number}) => {
  return (
    <View
      style={tw`px-7 py-8 bg-white mt-1 flex justify-center items-center border border-yellow-600 mr-2 rounded-xl`}>
      <TouchableOpacity>
        <Image style={{ width: 30, height: 30 }} source={{ uri: image }} />
      </TouchableOpacity>
      <Text style={tw``}> {name}</Text>
      <Text style={tw`text-yellow-500`}>prix: {price}</Text>
      <IconP
        name='plus'
        configs='  w-6 h-6 bg-blue-500 rounded-full m-2 absolute right-0.25 bottom-0.25'
        size={20}
      />
      <IconP
        name='heart'
        configs='  w-6 h-6 bg-red-600 rounded-full m-2 absolute right-0.25 top-0.25'
        size={17}
      />

      <Text
        style={tw` w-7 m-2 absolute left-0.25 bottom-0.25 `}
        >
        {number}
      </Text>
    </View>
  );
}

export default Card