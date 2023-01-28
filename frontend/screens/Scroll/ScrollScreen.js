import { View, Text, SafeAreaView, TextInput } from 'react-native'
import React, { useState } from 'react'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import tw from "twrnc"
import SearchButton from '../Components/SearchButton';
import Ingredient from '../Components/Ingredient';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
const ScrollScreen = () => {
    
const[search,setSearched]= useState('')

 const data = [
   {
     id: "1",
     breadName: "Chocolate Cake",
     breadType: "normal",
     stockQte: 100,
     keyIngrediant: "chocolate",
     price: 7000,
     image:
       "https://i.postimg.cc/Gh5BW4Yf/24d3fcec87ebaa9cf8d6a7010ce89f5e.gif",
   },
   {
     id: "2",
     breadName: "Cheese Cake",
     breadType: "normal",
     stockQte: 100,
     keyIngrediant: "fruit",
     price: 3000,
     image: "https://i.postimg.cc/wBqmwbm7/Cake-PNG-Image-50537.png",
   },
   {
     id: "3",
     breadName: "milk cake",
     breadType: "normal",
     stockQte: 100,
     keyIngrediant: "milk",
     price: 900,
     image:
       "https://i.postimg.cc/nhmbGLJ7/Lovepik-com-400312088-cream-dessert-design.png",
   },
   {
     id: "4",
     breadName: "baguette",
     breadType: "normal",
     stockQte: 100,
     keyIngrediant: "soymilk",
     price: 200,
     image:
       "https://i.postimg.cc/RV8PSrYZ/Chocolate-Cake-PNG-Free-Download.png",
   },
   {
     id: "5",
     breadName: "Wedding Cake",
     breadType: "normal",
     stockQte: 100,
     keyIngrediant: "chocolate",
     price: 200,
     image: "https://i.postimg.cc/g2WgXyGC/image-asset.png",
   },
 ];

 const ingredients = [
   { id:1, keyIngrediant: "chocolate" },
   { id:2, keyIngrediant: "soymilk" },
   { id:3, keyIngrediant: "milk" },
   { id:4, keyIngrediant: "fruit" },
 ];
 
const handleChange = (word) => {
setSearched(word.toLowerCase().trim());
}
  return (
    <SafeAreaView>
     
      <SafeAreaView style={tw`h-full`}>
        <SearchButton
          change={(word) => {
            handleChange(word);
          }}
        />

        <View style={tw`flex ml-6 justify-center mt-4 h-110 `}>
          <Text>{search}</Text>
          <Text
            style={[tw` font-bold text-3xl mt-3`, { color: "darkslateblue" }]}>
            Desserts
          </Text>

          {/* <Ingredient data={ingredients} />
           */}
          <View style={tw`h-120`}>
            <Header data={data} datai={ingredients} searchItem={search} />
          </View>
        </View>
        <View style={[tw`absolute bottom-0 right-0 `]}></View>
      </SafeAreaView>
    </SafeAreaView>
  );
}

export default ScrollScreen