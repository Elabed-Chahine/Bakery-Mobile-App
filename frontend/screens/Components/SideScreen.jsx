import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const SideScreen = () => {
  return (
    <View
      style={[{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },tw`border-l  w-28`]}>
      <Text>SideScreen</Text>
      
    </View>
  );
}

export default SideScreen

const styles = StyleSheet.create({})