import React, { useEffect, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home/Home";
import SignIn from "./screens/Auth/SignIn";
import LogIn from "./screens/Auth/LogIn";
import OTP from "./screens/Auth/Otp";
import HomeScreen from "./screens/Home/Home";
import Profile from "./screens/Profile/Profile";
import EditProfile from "./screens/Profile/EditProfile";



const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="SignIn" component={SignIn} /> */}
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
