import React, { useState, useRef } from "react";
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
} from "react-native"; // Ensure StatusBar is imported from react-native
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";


const OTP = () => {
    const [otp, setOtp] = useState(["", "", "", "", ""]);
    const [focusedIndex, setFocusedIndex] = useState(null);
    const inputRefs = useRef([]);
    const navigation = useNavigation();


    //   const phone = route.params?.phone;

    const handleChangeText = (text, index) => {
        let newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);
        setFocusedIndex(index);

        if (text.length === 1 && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === "Backspace" && otp[index] === "") {
            if (index > 0) {
                inputRefs.current[index - 1].focus();
                setFocusedIndex(index - 1);
            }
        }
    };

    const handlePress = () => {
        navigation.navigate("Home");
    };

    const handleBackPress = () => {
        navigation.navigate("LogIn");
    };

    return (
        <SafeAreaView
            style={[
                styles.safeArea,
                {
                    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, // Use StatusBar.currentHeight
                },
            ]}
        >
            <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
            <ImageBackground
                source={require('../../assets/images/splashbg.png')} // Background image
                style={{ flex: 1 }} // Make the background cover the whole screen
                resizeMode="cover" // Adjusts how the image is resized
            >
                <View style={styles.container}>
                    <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>

                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>OTP Verification</Text>
                        <Text style={styles.subHeaderText}>
                            Verification code sent to +918238592699
                        </Text>
                    </View>

                    <View style={styles.otpContainer} className=''>
                        {otp.map((digit, index) => (
                            <TextInput
                                key={index}
                                ref={(ref) => (inputRefs.current[index] = ref)}
                                value={digit}
                                onChangeText={(text) => handleChangeText(text, index)}
                                onKeyPress={(e) => handleKeyPress(e, index)}
                                onFocus={() => setFocusedIndex(index)}
                                className='bg-white'
                                onBlur={() => setFocusedIndex(null)}
                                style={[
                                    styles.otpInput,
                                    focusedIndex === index || digit
                                        ? styles.otpInputFocused
                                        : styles.otpInputDefault,
                                ]}
                                maxLength={1}
                                keyboardType="numeric"
                                returnKeyType="next"
                            />
                        ))}
                    </View>

                    <View style={styles.verifyButtonContainer}>
                        <LinearGradient
                            colors={["#0000ff", "#4682b4", "#87ceeb"]}
                            start={{ x: 1, y: 1 }}
                            end={{ x: 1.9, y: 0 }}
                            className="rounded-xl"
                        >
                            <Pressable
                                onPress={handlePress}
                                className="p-4 justify-center items-center"
                            >
                                <Text className="text-white text-lg font-semibold">
                                    Proceed
                                </Text>
                            </Pressable>
                        </LinearGradient>

                        <View style={styles.resendContainer} className='flex-row justify-center space-x-1'>
                            <Text style={styles.resendText}>Didn’t receive a code?</Text>
                            <TouchableOpacity>
                                <Text className='text-blue-500'>Resend</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    backButton: {
        marginVertical: 20,
    },
    headerContainer: {
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: "bold",
    },
    subHeaderText: {
        fontSize: 16,
        color: "gray",
    },
    otpContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 30,
    },
    otpInput: {
        width: 50,
        height: 50,
        textAlign: "center",
        fontSize: 18,
        borderRadius: 5,
        borderWidth: 1,
    },
    otpInputDefault: {
        borderColor: "gray",
    },
    otpInputFocused: {
        borderColor: "black",
    },
    verifyButtonContainer: {
        marginTop: 20,
    },
    gradientButton: {
        borderRadius: 5,
    },
    verifyButton: {
        padding: 15,
        alignItems: "center",
    },
    verifyButtonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
    },
    resendContainer: {
        marginTop: 20,
        alignItems: "center",
    },
    resendText: {
        color: "gray",
    },
    resendLink: {
        color: "#007022",
        fontWeight: "bold",
    },
});

export default OTP;
