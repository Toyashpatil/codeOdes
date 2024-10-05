import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, StatusBar, Platform } from 'react-native';
import { ChevronDown } from 'react-native-feather';

const SignIn = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        gender: '',
        age: '',
        collegeName: '',
        mobileNumber: ''
    });

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <SafeAreaView className="flex-1 bg-white">
                <View className={`flex-1 bg-white p-4 ${Platform.OS === 'android' ? 'pt-2' : ''}`}>
                    {/* Logo Section */}
                    <View>
                        <View className="mb-8 flex-row items-center justify-center">
                            <Text className="text-blue-500 text-4xl font-bold">shi</Text>
                            <Text className="text-yellow-400 text-4xl font-bold">▴</Text>
                            <Text className="text-blue-500 text-4xl font-bold">ft</Text>
                        </View>
                        <Image
                            source={require('../../assets/images/bus.png')}
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
                                    className="border border-gray-300 rounded-lg p-3 text-gray-600"
                                    placeholder="John Patil"
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

                        {/* Continue Button */}
                        <TouchableOpacity
                            className="bg-blue-500 rounded-lg p-4 mt-4"
                            onPress={() => console.log('Continue pressed')}
                        >
                            <Text className="text-white text-center font-semibold text-lg">Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
};

export default SignIn;