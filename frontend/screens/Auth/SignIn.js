import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  Platform,
  ImageBackground,
  Pressable,
  Alert,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import { BASE_URL } from "../../constants/constant";

const SignIn = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    age: "",
    college_name: "",
  });

  const navigation = useNavigation();
  const route = useRoute();

  const phone = route.params?.phone;
  const otp = route.params?.otp;

  handleNavigate = () =>{
    navigation.navigate('Home')
  }
  const handleVerify = async () => {

    try {
      // Use formData instead of directly referencing variables
      const { name, gender, age, college_name } = formData;

      if (!name || !gender || !age || !college_name) {
        Alert.alert("Error", "Please fill out all the fields.");
        return;
      }

      console.log("Sending request with data:", {
        phone,
        otp,
        name,
        gender,
        age,
        college_name,
      });

      const response = await axios.post("http://localhost:3000/user/verify/phone/otp", {
        phone: phone,
        otp: otp,
        name: name,
        gender: gender,
        college_name: college_name,
      });

      if (response.status === 200) {
        // Navigate to Home after successful registration
        navigation.replace("Home");
      } else {
        Alert.alert("Error", "Failed to complete registration");
      }
    } catch (error) {
      Alert.alert("Error", "Failed to complete registration");
      console.error("Verification Error:", error);
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaView className="flex-1">
        <ImageBackground
          source={require("../../assets/images/splashbg.png")} // Background image
          style={{ flex: 1 }} // Make the background cover the whole screen
          resizeMode="cover" // Adjusts how the image is resized
        >
          <View
            className={`flex-1 bg-white py-16 px-4 ${
              Platform.OS === "android" ? "" : ""
            }`}
          >
            {/* Form Fields */}
            <View className="flex-1 justify-between space-y-4">
              {/* Logo Section */}
              <View className="items-center">
                <Image
                  source={require("../../assets/images/bus.png")}
                  className=""
                  resizeMode="contain"
                />
                <Text className="text-2xl font-bold text-gray-500">Signup</Text>
              </View>

              {/* Main Form Area */}
              <View className="space-y-8">
                {/* Full Name */}
                <View>
                  <Text className="text-gray-700 mb-1">Full Name</Text>
                  <TextInput
                    className="border border-gray-300 rounded-lg p-3 text-gray-600"
                    placeholder="John Patil"
                    value={formData.name}
                    onChangeText={(text) =>
                      setFormData({ ...formData, name: text })
                    }
                    placeholderTextColor="#9CA3AF"
                  />
                </View>

                {/* Gender and Age Row */}
                <View className="flex-row space-x-4">
                  {/* Gender */}
                  <View className="flex-1">
                    <Text className="text-gray-700 mb-1">Gender</Text>
                    <TextInput
                      className="border border-gray-300 rounded-lg p-3 flex-row justify-between items-center"
                      placeholder="Gender"
                      value={formData.gender}
                      onChangeText={(text) =>
                        setFormData({ ...formData, gender: text })
                      }
                      placeholderTextColor="#9CA3AF"
                    />
                  </View>

                  {/* Age */}
                  <View className="flex-1">
                    <Text className="text-gray-700 mb-1">Age</Text>
                    <TextInput
                      className="border border-gray-300 rounded-lg p-2 text-gray-600"
                      placeholder="Age"
                      value={formData.age}
                      onChangeText={(text) =>
                        setFormData({ ...formData, age: text })
                      }
                      keyboardType="numeric"
                      placeholderTextColor="#9CA3AF"
                    />
                  </View>
                </View>

                {/* College Name */}
                <View>
                  <Text className="text-gray-700 mb-1">College Name</Text>
                  <TextInput
                    className="border border-gray-300 rounded-lg p-3 text-gray-600"
                    placeholder="K J Somaiya College"
                    value={formData.college_name}
                    onChangeText={(text) =>
                      setFormData({ ...formData, college_name: text })
                    }
                    placeholderTextColor="#9CA3AF"
                  />
                </View>
              </View>

              {/* Continue Button */}
              <LinearGradient
                colors={["#0000ff", "#4682b4", "#87ceeb"]}
                start={{ x: 1, y: 1 }}
                end={{ x: 1.9, y: 0 }}
                className="rounded-xl"
              >
                <Pressable
                  onPress={handleNavi}
                  className="p-4 justify-center items-center"
                >
                  <Text className="text-white text-lg font-semibold">
                    Proceed
                  </Text>
                </Pressable>
              </LinearGradient>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

export default SignIn;
