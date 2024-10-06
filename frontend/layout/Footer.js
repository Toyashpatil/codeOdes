import React from 'react';
import { Text, TouchableOpacity, View, Alert } from 'react-native';
import * as Icon from 'react-native-feather';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logoutUser } from '../../../store/Slices/userDetailSlice';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('');
  };

  return (
    <View className="flex-row justify-around border-t border-gray-200 py-3">
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
    <TouchableOpacity className="items-center">
      <Ionicons name="person" size={24} color="#4A90E2" />
      <Text className="text-xs mt-1 text-[#4A90E2]">Profile</Text>
    </TouchableOpacity>
  </View>
  );
};

export default Footer;
