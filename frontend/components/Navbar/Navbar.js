import React from 'react';
import { Text, TouchableOpacity, View, Alert } from 'react-native';
import * as Icon from 'react-native-feather';
// import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation ,  NavigationContainer} from '@react-navigation/native'


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
    <View className="flex-row justify-around items-center bg-white border-t border-gray-200 shadow-lg">
      <TouchableOpacity  className="items-center p-2 rounded-lg">
        <Icon.Home width={20} height={20} stroke="black" />
        <Text className='text-xs'>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity  className="items-center p-2 rounded-lg">
        <Icon.List width={20} height={20} stroke="black" />
        <Text className='text-xs'>Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity  className="items-center p-2 rounded-lg">
        <Icon.User width={20} height={20} stroke="black" />
        <Text className='text-xs'>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
