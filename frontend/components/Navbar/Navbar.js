import React from 'react';
import { Text, TouchableOpacity, View, Alert } from 'react-native';
import { Home, Gift, User, List, Award } from 'react-native-feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, NavigationContainer } from '@react-navigation/native';

const Navbar = () => {
  //   const dispatch = useDispatch();
  //   const navigation = useNavigation();

  //   const handleNavigateToNew = () => {
  //     // navigation.navigate('');
  //   };

  //   const handleNavigateToProfile = () => {
  //     // navigation.navigate('Profile');
  //   };

  return (
    <View className="relative">
      {/* Floating Action Button */}
      <TouchableOpacity className="absolute -top-9 left-[41%] z-10">
        <View className="w-20 h-20 bg-blue-600 rounded-full items-center justify-center shadow-lg">
          <Award width={24} height={24} stroke="white" />
        </View>
      </TouchableOpacity>

      {/* Bottom Navigation Bar */}
      <View className="flex-row justify-around items-center bg-white border-t border-gray-200 h-16 px-4">
        <TouchableOpacity className="items-center p-2 rounded-lg">
          <Home width={20} height={20} stroke="black" />
          <Text className="text-xs">Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity className="items-center p-2 rounded-lg">
          <Gift width={20} height={20} stroke="black" />
          <Text className="text-xs">Ticket</Text>
        </TouchableOpacity>
        
        {/* Empty View for Center Spacing */}
        <View className="w-16" />
        
        <TouchableOpacity className="items-center p-2 rounded-lg">
          <List width={20} height={20} stroke="black" />
          <Text className="text-xs">Ticket</Text>
        </TouchableOpacity>
        
        <TouchableOpacity className="items-center p-2 rounded-lg">
          <User width={20} height={20} stroke="black" />
          <Text className="text-xs">Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Navbar;