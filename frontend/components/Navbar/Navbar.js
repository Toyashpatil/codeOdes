import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Modal, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Navbar = () => {
    const navigation = useNavigation();
    const [isModalVisible, setModalVisible] = useState(false);

    const handleNavigateToProfile = () => {
        navigation.navigate('Profile');
    };

    const handleNavigateToWallet = () => {
      navigation.navigate('Wallet');
  };

  const handleNavigateToTicket = () => {
    navigation.navigate('Ticket');
};

    

    const handleSOSPress = () => {
        setModalVisible(true);
    };

    

    const handleSendAlert = () => {
        // Implement the logic to send the alert message here
        Alert.alert("Alert Sent", "Emergency services have been notified.");
        setModalVisible(false);
    };

    const handleCancelAlert = () => {
        setModalVisible(false);
    };

    return (
        <View className="relative">
            {/* Floating Action Button */}
            <TouchableOpacity className="absolute -top-24 left-[75%] z-10" onPress={handleSOSPress}>
                <View className="w-20 h-20 bg-red-500 rounded-full items-center justify-center shadow-lg">
                    <Text className='text-2xl text-white font-semibold'>SOS</Text>
                </View>
            </TouchableOpacity>

            {/* SOS Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View className="flex-1 justify-center items-center bg-opacity-50">
                    <View className="bg-white p-6 rounded-lg w-4/5">
                        <Text className="text-xl font-bold mb-4">Send Alert Message?</Text>
                        <Text className="mb-4">Are you sure you want to send an emergency alert?</Text>
                        <View className="flex-row justify-end">
                            <TouchableOpacity onPress={handleCancelAlert} className="mr-4">
                                <Text className="text-blue-500 font-semibold">Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleSendAlert}>
                                <Text className="text-red-500 font-semibold">Send Alert</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            {/* Bottom Navigation Bar */}
            <View className="flex-row justify-around border-t border-gray-200 py-3 bg-white">
                <TouchableOpacity className="items-center">
                    <Ionicons name="home-outline" size={24} color="#000" />
                    <Text className="text-xs mt-1">Home</Text>
                </TouchableOpacity>
                <TouchableOpacity className="items-center" onPress={handleNavigateToWallet}>
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