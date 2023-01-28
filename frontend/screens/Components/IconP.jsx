import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { disconnect, logout } from '../../features/Auth/Auth';
import { reset } from '../../features/Order/OrderSlice';

const IconP = ({name,configs,size,path,color}) => {
  const navigate = useNavigation();
  const dispatch= useDispatch();
  return (
    <TouchableOpacity
    onPress={() =>{ 
      if(color=="red"){
        dispatch(disconnect())
        dispatch(reset())
        

      }
      navigate.navigate(path)}}
      style={[
        { display: "flex", alignItems: "center", justifyContent: "center" },
        tw`${configs ? configs : "px-4 py-4  w-14 h-14  rounded-full m-2"}`,
      ]}>
      <IconComponentProvider IconComponent={MaterialCommunityIcons}>
        <Icon name={name} size={size ? size : 22} color={color? color: 'darkslateblue'} />
      </IconComponentProvider>
    </TouchableOpacity>
  );
}

export default IconP