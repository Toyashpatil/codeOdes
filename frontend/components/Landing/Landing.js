import React, { useEffect, useRef } from 'react';
import { View, Image, Animated, Text } from 'react-native';
import { Activity } from 'react-native-feather';

const Landing = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; 
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Fade animation
    Animated.timing(fadeAnim, {
      toValue: 1, 
      duration: 2000, 
      useNativeDriver: true,
    }).start();

    // Scale animation sequence
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.5,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1, 
        duration: 1000,
        useNativeDriver: true,
      })
    ]).start();
  }, [fadeAnim, scaleAnim]);

  return (
    <View className="flex flex-col justify-center items-center w-full h-full">
      {/* Background Image */}
      <Image 
        source={require('../../assets/images/splashbg.png')} 
        className="absolute w-full h-full object-cover"
      />

      {/* Logo Text */}
      <View className="flex-row items-center justify-center">
        {/* <Text className="text-blue-500 font-bold text-5xl">shi</Text>
        <Text className="text-yellow-400 font-bold text-5xl">▴</Text>
        <Text className="text-blue-500 font-bold text-5xl">ft</Text> */}
       <Image 
        source={require('../../assets/images/bus.png')} 
        className=""
      />
      </View>

      {/* Animated Icon */}
      {/* <Animated.View style={{ opacity: fadeAnim, transform: [{ scale: scaleAnim }] }} className='absolute bottom-16'>
      <Image 
        source={require('../../assets/images/bus.png')} 
        className="absolute w-full h-full object-cover"
      />
      </Animated.View> */}
    </View>
  );
};

export default Landing;