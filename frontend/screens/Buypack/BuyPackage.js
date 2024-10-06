import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Alert,
    Platform,
    StatusBar,
    ImageBackground,
} from "react-native";
import React from 'react'
import { Input } from "postcss";

const BuyPackage = () => {
    return (
        <SafeAreaView
            style={[
                styles.safeArea,
                {
                    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, // Use StatusBar.currentHeight
                },
            ]}
        >
            <StatusBar
                barStyle="dark-content"
                translucent
                backgroundColor="transparent"
            />
            <View>
                
            </View>
            <View className='flex items-center justify-start p-5 h-[100vh]'>
                <View className=''>
                    <Text className='font-medium text-lg '>Buy Package</Text>
                </View>
                <View className=' mt-10'>
                    <View>
                        <Text>Your Location</Text>
                        <TextInput
                            // onChangeText={setPhone}
                            className="caret-transparent border w-full rounded-md text-xl text-gray-600 p-1"
                            maxLength={50} // Adjust based on expected name length
                            placeholder="Enter your Location"
                            placeholderTextColor="#9CA3AF"
                        />

                    </View>
                    <Text className='font-medium text-lg '>Buy Package</Text>
                </View>
            </View>


        </SafeAreaView>

    )
}

export default BuyPackage

const styles = StyleSheet.create({})