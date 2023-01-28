import {
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Image, Input, Text } from "@rneui/base";
import { useDispatch, useSelector } from "react-redux";
import {  edit, reset } from "../../features/Auth/Auth";
import Toast from "react-native-root-toast";

import AsyncStorage from "@react-native-async-storage/async-storage";
import tw from "twrnc";

const EditScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { isLoading, isError, isSuccess, user, message } = useSelector(
    (state) => state.auth
  );
 useEffect(() => {
   if (isError) {
     Toast.show(`Edit failed Error: ${message}`, {
       duration: Toast.durations.SHORT,
       position: Toast.positions.BOTTOM,
       shadow: false,
       animation: true,
       hideOnPress: true,
       delay: 1,
     });
   } else if (isSuccess && user) {
     Toast.show(`user ${user.username} is Edited sccessfully`, {
       duration: Toast.durations.SHORT,
       position: Toast.positions.BOTTOM,
       shadow: false,
       animation: true,
       hideOnPress: true,
       delay: 1,
     });
   }

   return () => {
     dispatch(reset());
   };
 }, [isLoading, isError, isSuccess, user, message]);

 const onSubmit = (e) => {
   e.preventDefault();
   if (!email || !password) {
     Toast.show("Please fill all form", {
       duration: Toast.durations.SHORT,
       position: Toast.positions.BOTTOM,
       shadow: false,
       animation: true,
       hideOnPress: true,
       delay: 1,
     });
   } else {
     dispatch(edit({ username:name,email: email, password: password,id:user.id }));
   }
 };

 
  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar style='light' />
      <Image
        source={{
          uri: "https://i.postimg.cc/LsM9T56L/image.png",
        }}
        style={{ width: 150, height: 150, marginTop: 100 }}
      />
      <Text h3 style={{ marginBottom: 30 }}>
        Edit your account !
      </Text>

      <View style={styles.InputContainer}>
        <Input
          type='text'
          placeholder={user.username}
          autoFocus={true}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          type='text'
          placeholder={user.email}
          autoFocus={true}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          type='Password'
          secureTextEntry
          placeholder='Password'
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        
        <Button
          raised
          containerStyle={styles.button}
          onPress={(e)=>onSubmit(e)}
          title='Edit'
        />
        <View style={{ height: 20 }} />
      </View>
    </KeyboardAvoidingView>
  );
}

export default EditScreen

const styles = StyleSheet.create({})