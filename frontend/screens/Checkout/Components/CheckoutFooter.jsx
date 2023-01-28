import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useSelector } from 'react-redux'
const CheckoutFooter = () => {
  const {payment}=useSelector((state)=>state.order)
  return (
    <View style={tw`w-full flex items-center bg-gray-100 `}>
      <Text style={tw`font-semibold text-green-800 py-4`}>
        Order Credentials
      </Text>
      {payment && (
        <View style={tw`bg-gray-200 px-6 py-12 rounded-2xl `}>
          <Text style={tw`py-2 `}>
            {" "}
            <Text style={tw`font-semibold `}> Order Type:</Text>
            {payment.id}
          </Text>
          <Text style={tw`py-2 `}>
            {" "}
            <Text style={tw`font-semibold`}> Delivery Fee:</Text>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "TND",
            }).format(payment.price / 100)}
          </Text>
          <Text style={tw`py-2 `}>
            {" "}
            <Text style={tw`font-semibold`}> Delivery Duration:</Text>
            {payment.Time}
          </Text>
        </View>
      )}
    </View>
  );
}

export default CheckoutFooter