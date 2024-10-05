import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, StatusBar, Platform, ImageBackground, Pressable } from 'react-native';
import { ChevronDown } from 'react-native-feather';
import { LinearGradient } from "expo-linear-gradient";

const SignIn = () => {
    const navigation = useNavigation(); // Get the navigation object
    const [formData, setFormData] = useState({
        fullName: '',
        gender: '',
        age: '',
        collegeName: '',
        mobileNumber: ''
    });

    const handleContinue = () => {
        // Navigate to the Login page when the button is pressed
        navigation.navigate('LogIn');
    };
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <SafeAreaView className="flex-1">
                <ImageBackground
                    source={require('../../assets/images/splashbg.png')} // Background image
                    style={{ flex: 1 }} // Make the background cover the whole screen
                    resizeMode="cover" // Adjusts how the image is resized
                >
                    <View className={`flex-1 bg-white py-16 px-4 ${Platform.OS === 'android' ? '' : ''}`}>
                        {/* Form Fields */}
                        <View className="flex-1 justify-between space-y-4">
                            {/* Logo Section */}
                            <View className='items-center'>
                                <Image
                                    source={require('../../assets/images/bus.png')}
                                    className=""
                                    resizeMode="contain"
                                />
                                <Text className='text-2xl font-bold text-gray-500'>Signup</Text>
                            </View>

                            {/* Main Form Area */}
                            <View className="space-y-8">
                                {/* Full Name */}
                                <View>
                                    <Text className="text-gray-700 mb-1">Your Full Name*</Text>
                                    <TextInput
                                        className="border border-gray-300 rounded-lg p-3 text-gray-600"
                                        placeholder="John Patil"
                                        value={formData.fullName}
                                        onChangeText={(text) => setFormData({ ...formData, fullName: text })}
                                        placeholderTextColor="#9CA3AF"
                                    />
                                </View>

                                {/* Gender and Age Row */}
                                <View className="flex-row space-x-4">
                                    {/* Gender */}
                                    <View className="flex-1">
                                        <Text className="text-gray-700 mb-1">Gender*</Text>
                                        <TouchableOpacity
                                            className="border border-gray-300 rounded-lg p-3 flex-row justify-between items-center"
                                        >
                                            <Text className="text-gray-400">Gender*</Text>
                                            <ChevronDown width={20} height={20} color="#9CA3AF" />
                                        </TouchableOpacity>
                                    </View>

                                    {/* Age */}
                                    <View className="flex-1">
                                        <Text className="text-gray-700 mb-1">Age*</Text>
                                        <TextInput
                                            className="border border-gray-300 rounded-lg p-2 text-gray-600"
                                            placeholder="Age"
                                            value={formData.age}
                                            onChangeText={(text) => setFormData({ ...formData, age: text })}
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
                                        onChangeText={(text) => setFormData({ ...formData, collegeName: text })}
                                        placeholderTextColor="#9CA3AF"
                                    />
                                </View>

                                {/* Mobile Number */}
                                <View>
                                    <Text className="text-gray-700 mb-1">Enter Your Mobile Number *</Text>
                                    <TextInput
                                        className="border border-gray-300 rounded-lg p-3 text-gray-600"
                                        placeholder="1234567890"
                                        value={formData.mobileNumber}
                                        onChangeText={(text) => setFormData({ ...formData, mobileNumber: text })}
                                        keyboardType="phone-pad"
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
                                    onPress={handleContinue}
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
