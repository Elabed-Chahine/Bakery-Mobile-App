import { StatusBar } from 'expo-status-bar';
import tw from "twrnc";
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import scrollScreen from './screens/Scroll/ScrollScreen';
import Checkout from "./screens/Checkout/Checkout";
import Footer from './screens/Components/Footer';
import LoginScreen from './screens/Auth/LoginScreen';
import RegisterScreen from './screens/Auth/RegisterScreen';
import { Provider } from "react-redux";
import  store  from './App/Store';
import { RootSiblingParent } from "react-native-root-siblings";
import EditScreen from './screens/Edit/EditScreen';
import HomeScreen from './screens/Home/HomeScreen';
import MapScreen from './screens/Map/MapScreen';
export default function App() {
  const stack = createNativeStackNavigator()
  return (
    <Provider store={store}>
      <NavigationContainer style={styles.container}>
        <RootSiblingParent>
          <StatusBar
            barStyle={"dark-content"}
            animated={true}
            showHideTransition={"fade"}
            hidden={false}
          />

          <stack.Navigator
            screenOptions={{
              headerShown: false,

              headerTintColor: "black",
              headerStyle: {
                backgroundColor: "royalblue",
                borderRadius: 40,
                height: 20,
              },
            }}>
            <stack.Screen name='Login' component={LoginScreen} options={{}} />
            <stack.Screen
              name='RegisterScreen'
              component={RegisterScreen}
              options={{}}
            />
            <stack.Screen name='Edit' component={EditScreen} options={{}} />
            <stack.Screen name='/' component={HomeScreen} options={{}} />
            <stack.Screen name='MapScreen' component={MapScreen} options={{}} />

            <stack.Screen name='Scroll' component={scrollScreen} options={{}} />
            <stack.Screen name='Checkout' component={Checkout} />
          </stack.Navigator>
          <Footer />
        </RootSiblingParent>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
