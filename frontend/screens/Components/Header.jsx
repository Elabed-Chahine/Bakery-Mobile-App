import { View, Text, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
import { Stack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Card from './Card';
import Present from './Present';
import debounce from 'lodash.debounce';
import { ActivityIndicator } from 'react-native';
const Header = ({data,datai,searchItem}) => {
   
const [active, setActive] = useState(null);
const [info,setInfo] = useState(data);
const  [pending,setPending] = useState(false)
let table
  

      
useEffect(() => {

  if(active)
  setInfo(data.filter((item) => {return active.keyIngrediant == item.keyIngrediant}));

  if(searchItem != '')
  {  setInfo(
    data.filter((item) => {
      return ((item.keyIngrediant.includes(searchItem)) || (item.breadName.toLowerCase().includes(searchItem)));
    })
    
  );
setActive(null);
}else if((searchItem == '') && (! active)){
  setInfo(data)
}
 
}, [active,searchItem]);





  return (
    <View style={tw`h-120`}>
      <View>
        <FlatList
          style={tw`mb-8`}
          horizontal={true}
          data={datai}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {if (
                (! active) ||
                (active && active.keyIngrediant != item.keyIngrediant)
              ) {
                setPending(true);
                setActive(item);
               
               

                setTimeout(() => setPending(false), 20);
              } else if (active && active.keyIngrediant == item.keyIngrediant) {
                setActive(null);
                 setInfo(
                  data.map((item) => {
                    return item;
                  }))
              }

              }}
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
      <View>
        {/*  <FlatList
          horizontal={false}
          data={table}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Present
              image={item.image}
              name={item.breadName}
              price={item.price}
              number={item.stockQte}
            />
          )}
        /> */}
        <ScrollView style={tw`w-84`}>
          {pending && (
            <ActivityIndicator size="small" color="#0000ff" />
          )}
          {!pending && (info.length == 0) && (
         
            <Text style={tw`ml-18 font-bold text-blue-900`}>
            your seach isn't available..
            </Text>)
          }
          { !pending && (info.map((item) =>{return (
            <View key={item.id}>
              <Present
                image={item.image}
                name={item.breadName}
                price={item.price}
                number={item.stockQte}
              />
            </View>
          );}))}
        </ScrollView>
      </View>
    </View>
  );
}

export default Header