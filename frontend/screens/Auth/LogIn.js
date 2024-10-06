import React, { useState } from "react";
import {
  Text,
  Pressable,
  TextInput,
  View,
  TouchableOpacity,
  Platform,
  SafeAreaView,
  StatusBar as RNStatusBar,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/Slices/userDetailSlice";
import Ionicons from 'react-native-vector-icons/Ionicons';


const LogIn = () => {
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const loginStatus = useSelector((state) => state.users.loginStatus);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/user/login', {
        method: 'POST', // HTTP method
        headers: {
          'Content-Type': 'application/json', // Content-type set to JSON
        },
        body: JSON.stringify({
          // Data to be sent in the body of the request
          phone:9892489468
        }),
      });
      const result = await response.json(); 
      console.log(result)

    } catch (error) {
      console.log('Error : ' + error)
    }
  };

  const handleBackPress = () => {
    navigation.navigate("SignIn");
  };

  const handleLogIn = () => {
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? RNStatusBar.currentHeight : 0,
      }}
      className="bg-[#ffffff]"
    >
      <RNStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <View className="flex-1 items-center">
        <View className="w-[90%] space-y-10 mt-4">
          {/* Back Button */}
          <TouchableOpacity
            onPress={handleBackPress}
            className="p-2 rounded-full"
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>

          {/* Header Text */}
          <View className="items-center justify-center">
            <Image
              source={require("../../assets/images/bus.png")}
              className="mr-7"
              resizeMode="contain"
            />
            <Text className="text-2xl font-bold text-gray-500">
              Welcome👋🏻 Back
            </Text>
          </View>

          {/* TextInput for Name */}
          <View className="flex-row justify-center">
            <TextInput
              value={phone}
              onChangeText={setPhone}
              className="caret-transparent border w-full rounded-md text-xl text-gray-600 p-3"
              maxLength={50} // Adjust based on expected name length
              placeholder="Enter phone number"
              placeholderTextColor="#9CA3AF"
            />
          </View>

          {/* Proceed Button */}
          <View className="rounded-md">
            <LinearGradient
              colors={["#0000ff", "#4682b4", "#87ceeb"]}
              start={{ x: 1, y: 1 }}
              end={{ x: 1.9, y: 0 }}
              className="rounded-xl"
            >
              <Pressable
                onPress={handleLogIn}
                className="p-4 justify-center items-center"
              >
                <Text className="text-white text-lg font-semibold">
                  Proceed
                </Text>
              </Pressable>
            </LinearGradient>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LogIn;