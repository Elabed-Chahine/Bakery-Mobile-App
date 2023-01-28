import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Toast from "react-native-root-toast";
import { Image } from "@rneui/themed";
import { Button, Input, Text } from "@rneui/base";
import {} from "react-native-web";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../../features/Auth/Auth";

import AsyncStorage from "@react-native-async-storage/async-storage";
import tw from "twrnc";
import ProfileScreen from "../Profile/ProfileScreen";


const LoginScreen = () => {
  const navigation =  useNavigation()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let bro = async () => await AsyncStorage.getItem("user");
const dispatch = useDispatch();
const {isLoading, isError, isSuccess, user, message} = useSelector((state)=>state.auth);
  useEffect(() => {
    if (isError) {
        Toast.show(`login failed Error: ${message}`, {
          duration: Toast.durations.SHORT,
          position: Toast.positions.BOTTOM,
          shadow: false,
          animation: true,
          hideOnPress: true,
          delay: 1,
        });
    } else if (isSuccess && user) {
       Toast.show(`user ${user.username} is logged in`, {
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
    Toast.show('Please fill all form', {
    duration: Toast.durations.SHORT,
    position: Toast.positions.BOTTOM,
    shadow: false,
    animation: true,
    hideOnPress: true,
    delay: 1,})
   } else {
     dispatch(login({email: email, password: password}));
   }
 };

 if(user==null){
  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar style='light' />
      {isLoading && (
        <ActivityIndicator
          size='large'
          color='blue'
          style={{ paddingBottom: 10,position:'relative' }}
        />
      )}

      <Image
        source={{
          uri: "https://i.postimg.cc/MZBskGWv/20944201.jpg",
        }}
        style={{ width: 300, height: 300 }}
      />
      <View style={styles.inputContainer}>
        
        <Input
          style={{
            borderWidth: 1,
            borderRadius: 18,
            textAlign: "center",
          }}
          type='Email'
          placeholder='Email'
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          type='Password'
          style={{
            borderWidth: 1,
            borderRadius: 18,
            textAlign: "center",
          }}
          placeholder='Password'
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <Button
          title='Login'
          style={{
            width: 200,
            marginBottom: 10,
            backgroundColor: "black",
            marginLeft: 20,
          }}
          type='outline'
          onPress={(e) => onSubmit(e) }
        />
        <Button
          title='Register'
          style={styles.button}
          type='outline'
          onPress={() => navigation.navigate("RegisterScreen")}
        />
      </View>
    </KeyboardAvoidingView>
  );}
  else
  {
     return (
        <ProfileScreen isLoading={isLoading} user={user} navigation={navigation}/>
     )
  }
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: { width: 250, padding: 5 },
  button: { width: 200, marginBottom: 10, marginLeft: 20 },
  logo: {
    backgroundColor: "#141823",
    paddingTop: 10,
    paddingLeft: 20,
    paddingBottom: 10,
    paddingRight: 20,
    borderRadius: 20,
  },
});
