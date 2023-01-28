import { View, Text, FlatList, Button, ScrollView, TouchableOpacity } from 'react-native'
import React,{useEffect, useState} from 'react'
import tw from 'twrnc'
import Card from './Card'
import {_} from 'lodash'


const Ingredient =  ({data}) => {



const [active, setActive] = useState(null)

    /*  data.reduce((table,item)=>{
        if ( table.indexOf(item.Ingredients))
        {
        return table}
        else{
            return table.push(item)
        } 
    }) */
  


  return (
    <View>
      <FlatList
        style={tw`mb-8`}
        horizontal={true}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setActive(item)}
            style={tw` px-6 py-2 border-blue-800 mt-2 ml-2  border rounded-full ${
              item.id == active?.id ? "bg-blue-900" : ""
            }`}>
            <Text
              style={tw` font-semibold  ${
                item.id == active?.id ? "text-white " : "text-blue-900"
              }`}>
              {item.keyIngrediant}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default Ingredient