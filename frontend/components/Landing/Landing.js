import React, { useEffect, useRef } from 'react';
import { View, Image, Animated } from 'react-native';
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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
      {/* Background Image */}
      <Image 
        source={require('../../assets/images/splashbg.png')} 
        style={{ position: 'absolute', width: '100%', height: '100%' }}
      />

      {/* Logo Text */}
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Image 
          source={require('../../assets/images/bus.png')} 
          style={{ width: 100, height: 100 }}
        />
      </View>

      {/* Animated Icon */}
      <Animated.View style={{ opacity: fadeAnim, transform: [{ scale: scaleAnim }], position: 'absolute', bottom: 16 }}>
        <Activity color="black" width={100} height={100} />
      </Animated.View>
    </View>
  );
};

export default Landing;
