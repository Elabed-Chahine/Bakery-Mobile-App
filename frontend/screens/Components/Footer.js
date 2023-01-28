import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import IconP from './IconP'
import tw from 'twrnc'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from 'react-redux';
const Footer = () => {
  const [connected, setConnected] = useState(false);
  const {user} = useSelector((state)=>state.auth)
  useEffect(() => {
    
     setConnected(user!=null)

    
  },[user])
  return (
    <View
      style={[
        {
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: 117,
          backgroundColor: "white",
        },
        tw`rounded-tl-3xl shadow-lg rounded-tr-3xl  right-0 h-24 w-full`,
      ]}>
      {/* this is the footer of the page */}
      <IconP name={"home"} path='/' />
      <IconP name={"heart"} path={"Checkout"} />
      <IconP
        name={"account"}
        configs='px-4 py-4 bg-gray-200 rounded-full m-2'
        size={35}
        path={"Login"}
      />
      <IconP name={"filter"} path='Scroll' />
      {(connected && (
        <IconP name={"logout"} path={"Login"} color={"red"} />
      )) || <IconP name={"login"} path={"Login"} color={"green"} />}
    </View>
  );
}

export default Footer