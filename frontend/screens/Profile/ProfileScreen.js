import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ActivityIndicator,
  StatusBar,
  Image,
  
} from "react-native";
import React from "react";
import tw from 'twrnc';
import { Button, Text } from "@rneui/base";
import { Stack, Avatar } from "@react-native-material/core";
import { VERSION } from "lodash";
const ProfileScreen = ({isLoading,user,navigation}) => {
  return (
    <KeyboardAvoidingView style={[styles.container, tw`bg-blue-400`]}>
      <StatusBar style='light' />
      {isLoading && (
        <ActivityIndicator
          size='large'
          color='blue'
          style={{ paddingBottom: 10, position: "relative" }}
        />
      )}
      <View
        style={[tw`w-60 h-120 bg-white opacity-76`, { borderRadius: 30 }]}>
        <Stack center spacing={2}>
          <Avatar
            image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }}
          />
        </Stack>
        <View style={styles.Container}>
          <Text style={tw`text-blue-800 mt-12 text-xl font-semibold ml-8`}>
            {" "}
            Welcome: {user.username}{" "}
          </Text>

          <Text style={tw`text-blue-900 text-xl mt-6 mb-8 ml-8`}>
            {" "}
            {user.email}{" "}
          </Text>

          <Button
            title='Edit'
            style={styles.button}
            type='outline'
            onPress={() => navigation.navigate("Edit")}
          />
          <Image
            source={{
              uri: "https://i.postimg.cc/MZBskGWv/20944201.jpg",
            }}
            style={{ width: 200, height: 200, marginLeft:23 }}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ProfileScreen;

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
