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
import Toast from "react-native-root-toast";
import { register, reset } from "../../features/Auth/Auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import tw from "twrnc";
const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { isLoading, isError, isSuccess, user, message } = useSelector(
    (state) => state.auth
  );
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
     Toast.show("Please fill all form", {
       duration: Toast.durations.SHORT,
       position: Toast.positions.BOTTOM,
       shadow: false,
       animation: true,
       hideOnPress: true,
       delay: 1,
     });
   } else {
     dispatch(register({ username:name,email: email, password: password }));
   }
 };

 if(user==null) {
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
        Create an account !
      </Text>

      <View style={styles.InputContainer}>
        <Input
          type='text'
          placeholder='fullname'
          autoFocus={true}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          type='text'
          placeholder='Email'
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
          title='Register'
        />
        <View style={{ height: 20 }} />
      </View>
    </KeyboardAvoidingView>
  );}else{
     return (
       <KeyboardAvoidingView style={styles.container}>
         <StatusBar style='light' />
         {isLoading && (
           <ActivityIndicator
             size='large'
             color='blue'
             style={{ paddingBottom: 10, position: "relative" }}
           />
         )}

         <Image
           source={{
             uri: "https://i.postimg.cc/MZBskGWv/20944201.jpg",
           }}
           style={{ width: 300, height: 300 }}
         />
         <View style={styles.Container}>
           <Text style={tw`text-blue-800 text-xl font-semibold ml-12`}>
             {" "}
             Welcome: {user.username}{" "}
           </Text>

           <Button
             title='Edit'
             style={styles.button}
             type='outline'
             onPress={() => navigation.navigate("EditScreen")}
           />
         </View>
       </KeyboardAvoidingView>
     );
  }
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: { backgroundColor: "black" },
  InputContainer: { width: 200 },
});
