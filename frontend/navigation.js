import React, { useEffect, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home/Home";
import SignIn from "./screens/Auth/SignIn";
import LogIn from "./screens/Auth/LogIn";
import OTP from "./screens/Auth/Otp";
import Ticket from "./screens/Ticket/Ticket";
import HomeScreen from "./screens/Home/Home";
import Wallet from "./screens/Wallet/Wallet";
import BuyPackage from "./screens/Buypack/BuyPackage";



const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
       
        {/* <Stack.Screen name="LogIn" component={LogIn} /> */}
        {/* <Stack.Screen name="OTP" component={OTP} /> */}
        {/* <Stack.Screen name="SignIn" component={SignIn} /> */}
        {/* <Stack.Screen name="Home" component={Home} /> */}
        {/* <Stack.Screen name="Wallet" component={Wallet} /> */}
        <Stack.Screen name="buyPack" component={BuyPackage} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
