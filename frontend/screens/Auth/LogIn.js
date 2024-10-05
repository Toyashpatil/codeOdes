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
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const LogIn = () => {
    const [name, setName] = useState("");

    const navigation = useNavigation();

    const handleBackPress = () => {
        navigation.navigate("SignIn");
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
                    <View className='items-center justify-center'>
                        <Image
                            source={require('../../assets/images/bus.png')}
                            className="mr-7"
                            resizeMode="contain"
                        />
                        <Text className='text-2xl font-bold text-gray-500'>Welcome👋🏻 Back</Text>
                    </View>

                    {/* TextInput for Name */}
                    <View className="flex-row justify-center">
                        <TextInput
                            value={name}
                            onChangeText={setName}
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
                            start={{ x: 0, y: 1 }}
                            end={{ x: 1.9, y: 0 }}
                            className="rounded-xl"
                        >
                            <Pressable
                                // onPress={handleVerify}
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
