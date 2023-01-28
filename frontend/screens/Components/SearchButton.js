import { View, Text, TextInput } from 'react-native'
import { Input} from "@rneui/base";
import React, { useState } from 'react'
import tw from "twrnc";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { IconButton } from "@react-native-material/core";

const SearchButton = ({change}) => {
    const [focus, setFocused] = useState(false);
    const [search, setSearch] = useState('');


    const handleChange = (text) => {
      setSearch(text);
    }
   
  return (
    <View
      style={tw`mt-2 ml-22 mb-8 pr-4 py-1 rounded-full  border-purple-800 shadow-lg flex-row justify-center items-center w-50 ${
        focus ? "border-2" : "border"
      }`}>
      <IconButton
        icon={(props) => <Icon name='magnify' {...props} />}
        color='darkslateblue'
        onPress={() => change(search)}
      />
      <TextInput
        style={tw`w-30`}
        value={search}
        onFocus={() => setFocused(true)}
        onEndEditing={(e) =>{ setFocused(false);
          change(search)
        }}
        placeholder='  search for order'
        onChangeText={(text) =>handleChange(text)
        }
        
      />
    </View>
  );
}

export default SearchButton