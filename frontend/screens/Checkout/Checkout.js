import { View, Text, SafeAreaView, TouchableOpacity, Image, FlatList, ActivityIndicator, StatusBar } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { Icon } from '@rneui/base';
import { useSelector } from 'react-redux';
import NavFavourites from '../Home/NavFavourites';




const Checkout = () => {


const {user} = useSelector((state)=>state.auth)

const {data}= useSelector((state)=>state.order)

/* const data = [
  {
    id: 1,
    username: "salah",
    Qte: 5,

    breadName: "baguette",
    breadType: "normal",
    keyIngrediant: "soymilk",
    price: 200,
    image: "https://i.postimg.cc/RV8PSrYZ/Chocolate-Cake-PNG-Free-Download.png",
  },
  {
    id: 2,
    username: "salah",
    Qte: 5,

    breadName: "baguette",
    breadType: "normal",
    keyIngrediant: "soymilk",
    price: 200,
    image: "https://i.postimg.cc/RV8PSrYZ/Chocolate-Cake-PNG-Free-Download.png",
  },
]; */





if(user!==null)
  {return (
    <SafeAreaView style={tw`h-full`}>
      <Text style={tw`font-semibold text-blue-800 px-8 py-6 text-xl`}>
        {user.username}'s orders
      </Text>
      <View style={tw`w-full h-1 bg-purple-800`} />
      {(data.length && (
        <FlatList
          data={data}
          horizontal={true}
          KeyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <SafeAreaView style={tw`h-1/2`}>
              <TouchableOpacity
                style={tw` p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
                <View //</TouchableOpacity>style={tw`${!origin && "opacity-20"}`}
                >
                  <Image
                    style={{ height: 120, width: 120, resizeMode: "contain" }}
                    source={{ uri: item.image }}
                  />
                  <Text style={tw`mt-2 font-semibold text-lg text-center `}>
                    {item.breadName}
                  </Text>
                  <Text style={tw`mt-2 text-yellow-800 text-lg text-center `}>
                    Price:
                    {item.price}
                  </Text>
                  <Text style={tw`mt-2 font-semibold text-lg text-center `}>
                    Qte:
                    {item.Qte}
                  </Text>
                  <Icon
                    style={tw`bg-black rounded-full w-10 p-2`}
                    name='arrowright'
                    color='white'
                    type='antdesign'
                  />
                </View>
              </TouchableOpacity>
            </SafeAreaView>
          )}
        />
      )) || (
        <SafeAreaView
          style={tw`w-full h-full flex items-center justify-center`}>
          <StatusBar style='dark' />
          <ActivityIndicator
            size='large'
            color='darkcyan'
            style={{ paddingBottom: 10, position: "relative" }}
          />
          <Text style={tw`w-60 text-cyan-600 font-semibold text-xl`}>
            You have no orders.
          </Text>
        </SafeAreaView>
      )}
      <View style={tw``}>
        <Text style={tw`font-semibold text-blue-800 `}>
          place the order directly to your usual locations
        </Text>
        <NavFavourites />
      </View>
    </SafeAreaView>
  );}else{
    return (
      <SafeAreaView style={tw`w-full h-full flex items-center justify-center`}>
        <StatusBar style='dark' />
        <ActivityIndicator
          size='large'
          color='darkcyan'
          style={{ paddingBottom: 10, position: "relative" }}
        />
        <Text style={tw`w-60 text-cyan-600 font-semibold text-xl`}>
          You are not logged in yet.
        </Text>
      </SafeAreaView>
    );
  }
}

export default Checkout