import React from 'react';
import { Text, TouchableOpacity, View, Alert } from 'react-native';
import { Home, Gift, User, List, Award } from 'react-native-feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Navbar = () => {
  //   const dispatch = useDispatch();
    const navigation = useNavigation();

    const handleNavigateToProfile = () => {
      navigation.navigate('Profile');
    };

  //   const handleNavigateToProfile = () => {
  //     // navigation.navigate('Profile');
  //   };

  return (
    <View className="relative">
      {/* Floating Action Button */}
      <TouchableOpacity className="absolute -top-24 left-[75%] z-10">
        <View className="w-20 h-20 bg-blue-600 rounded-full items-center justify-center shadow-lg">
          <Award width={24} height={24} stroke="white" />
        </View>
      </TouchableOpacity>

      {/* Bottom Navigation Bar */}
      <View className="flex-row justify-around border-t border-gray-200 py-3 bg-white">
        <TouchableOpacity className="items-center">
          <Ionicons name="home-outline" size={24} color="#000" />
          <Text className="text-xs mt-1">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Ionicons name="wallet-outline" size={24} color="#000" />
          <Text className="text-xs mt-1">Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Ionicons name="ticket-outline" size={24} color="#000" />
          <Text className="text-xs mt-1">Ticket</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Ionicons name="notifications-outline" size={24} color="#000" />
          <Text className="text-xs mt-1">Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNavigateToProfile} className="items-center">
          <Ionicons name="person-outline" size={24} color="#000" />
          <Text className="text-xs mt-1">Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Navbar;