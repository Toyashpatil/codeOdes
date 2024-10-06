import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Ticut = () => {
  // Define a JSON array with ticket status
  const data = [
    { id: 1, name: 'Entry 1', description: 'This is the first entry', status: 'active' },
    { id: 2, name: 'Entry 2', description: 'This is the second entry', status: 'inactive' },
    { id: 3, name: 'Entry 3', description: 'This is the active ticket', status: 'inactive' },
  ];

  return (
    <View style={styles.container} className="space-y-4">
      {data.map((item, index) => (
        <ScrollView
          key={index}
          className={`w-80 rounded-lg shadow-md my-4 ${
            item.status === 'active' ? 'bg-white' : 'bg-gray-300'
          }`}
        >
          {/* Top Section */}
          <View
            className={`flex-row justify-between items-center p-4 rounded-t-lg ${
              item.status === 'active' ? 'bg-blue-500' : 'bg-gray-400'
            }`}
          >
            <View>
              <Text className="text-white font-bold text-lg">BUS 05</Text>
              
              <Text className="text-white text-sm">May 20, 23</Text>
            </View>
            <Text className="text-white font-bold text-xl">Rs 15</Text>
          </View>

          {/* Route Section */}
          <View className="flex-row justify-between p-4 items-center">
            <View className="flex-1 items-start">
              <Text className="text-lg font-bold">Mirpur-12</Text>
              <Text className="text-gray-500 text-sm">Mirpur-12</Text>
              <Text className={`font-bold mt-2 ${item.status === 'active' ? 'text-black' : 'text-gray-600'}`}>
                10.40 AM
              </Text>
            </View>

            {/* Bus Icon and Distance */}
            <View className="flex-1 items-center">
              <Text className="text-gray-500 text-xs">12 km</Text>
              <Text className="text-gray-500 mt-1 text-xs">1 hour 20 mins</Text>
            </View>

            <View className="flex-1 items-end">
              <Text className="text-lg font-bold">Shyamoli</Text>
              <Text className="text-gray-500 text-sm">Dhanmondi</Text>
              <Text className={`font-bold mt-2 ${item.status === 'active' ? 'text-black' : 'text-gray-600'}`}>
                12.00 PM
              </Text>
            </View>
          </View>
        </ScrollView>
      ))}
    </View>
  );
};

export default Ticut;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
