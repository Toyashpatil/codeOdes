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
} from "react-native";
import { ChevronDown } from "react-native-feather";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";

const SignIn = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    age: "",
    collegeName: "",
    mobileNumber: "",
  });

  const navigation = useNavigation();
  const route = useRoute();

  const phone = route.params?.phone;
  const otp = route.params?.otp;

  const handleVerify = async () => {
    try {
      console.log("Sending request with data:", { phone, otp, name });
      const response = await axios.post(`${BASE_URL}/user/verify/phone/otp`, {
        phone: phone,
        otp: otp,
        name: name,
        gender: gender,
        age: age,
        collegeName,
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

  const handleBackPress = () => {
    navigation.navigate("SignIn");
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaView className="flex-1 bg-white">
        <View
          className={`flex-1 bg-white p-4 ${
            Platform.OS === "android" ? "pt-2" : ""
          }`}
        >
          {/* Logo Section */}
          <View>
            <View className="mb-8 flex-row items-center justify-center">
              <Text className="text-blue-500 text-4xl font-bold">shi</Text>
              <Text className="text-yellow-400 text-4xl font-bold">▴</Text>
              <Text className="text-blue-500 text-4xl font-bold">ft</Text>
            </View>
            <Image
              source={require("../../assets/images/bus.png")}
              className=""
              resizeMode="contain"
            />
          </View>
          {/* Form Fields */}
          <View className="space-y-4">
            {/* Full Name */}
            <View>
              <Text className="text-gray-700 mb-1">Your Full Name*</Text>
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

<<<<<<< HEAD
                            {/* Continue Button */}
                            <LinearGradient
                                colors={["#0000ff", "#4682b4", "#87ceeb"]}
                                start={{ x: 1, y: 1 }}
                                end={{ x: 1.9, y: 0 }}
                                className="rounded-xl"
                            >
                                <Pressable
                                    onPress={handleContinue}
                                    className="p-4 justify-center items-center"
=======
                        {/* Gender and Age Row */}
                        <View className="flex-row space-x-4">
                            {/* Gender */}
                            <View className="flex-1">
                                <Text className="text-gray-700 mb-1">Gender*</Text>
                                <TouchableOpacity
                                    className="border border-gray-300 rounded-lg p-3 flex-row justify-between items-center"
>>>>>>> refs/remotes/origin/main
                                >
                                    <Text className="text-gray-400">Gender*</Text>
                                    <ChevronDown width={20} height={20} color="#9CA3AF" />
                                </TouchableOpacity>
                            </View>

              {/* Age */}
              <View className="flex-1">
                <Text className="text-gray-700 mb-1">Age*</Text>
                <TextInput
                  className="border border-gray-300 rounded-lg p-3 text-gray-600"
                  placeholder="John Patil"
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
                placeholder="K J"
                value={formData.collegeName}
                onChangeText={(text) =>
                  setFormData({ ...formData, collegeName: text })
                }
                placeholderTextColor="#9CA3AF"
              />
            </View>

            {/* Mobile Number */}
            <View>
              <Text className="text-gray-700 mb-1">
                Enter Your Mobile Number *
              </Text>
              <TextInput
                className="border border-gray-300 rounded-lg p-3 text-gray-600"
                placeholder="1234567890"
                value={formData.mobileNumber}
                onChangeText={(text) =>
                  setFormData({ ...formData, mobileNumber: text })
                }
                keyboardType="phone-pad"
                placeholderTextColor="#9CA3AF"
              />
            </View>

            {/* Continue Button */}
            <TouchableOpacity
              className="bg-blue-500 rounded-lg p-4 mt-4"
              onPress={() => console.log("Continue pressed")}
            >
              <Text className="text-white text-center font-semibold text-lg">
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SignIn;

