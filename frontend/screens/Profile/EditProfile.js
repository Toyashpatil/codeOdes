import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const EditProfile = () => {
  const profileItems = [
    { icon: 'location-outline', title: 'My Locations' },
    { icon: 'shield-checkmark-outline', title: 'Trusted Location' },
    { icon: 'gift-outline', title: 'Offers & Voucher' },
    { icon: 'log-out-outline', title: 'Sign Out' },
  ];

  const renderProfileItem = (item, index) => (
    <TouchableOpacity key={index} className="flex-row items-center py-4 border-b border-gray-200">
      <Ionicons name={item.icon} size={24} color="#000" />
      <Text className="flex-1 ml-4 text-base">{item.title}</Text>
      <Ionicons name="chevron-forward" size={24} color="#000" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <View className="flex-row items-center bg-black py-4 px-3">
          <TouchableOpacity className="mr-3">
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text className="text-white text-lg font-bold">Profile</Text>
        </View>

        <View className="items-center py-6 bg-black">
          <Image
            source={{ uri: 'https://example.com/placeholder-image.jpg' }}
            className="w-20 h-20 rounded-full mb-3"
          />
          <Text className="text-lg font-bold text-white mb-1">John Doe</Text>
          <Text className="text-base text-white">01701010101</Text>
        </View>

        <View className="px-4 pt-5">
          {profileItems.map(renderProfileItem)}
        </View>
      </ScrollView>

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
    </SafeAreaView>
  );
};

export default EditProfile;