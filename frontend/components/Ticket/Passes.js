import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Passes = () => {
  // Define a JSON array
  const data = [
    { id: 1, name: 'Entry 1', description: 'This is the first entry' },
  ];

  return (
    <View style={styles.container} className='space-y-4'>
      {data.map((item,index) => (
         <View key={index} className="w-80 bg-white rounded-lg shadow-md my-4">
         {/* Top Section */}
         <View className="flex-row justify-between items-center bg-blue-500 p-4 rounded-t-lg">
           <View>
             <Text className="text-white font-bold text-lg">Quaterly</Text>
             <Text className="text-white text-sm">#abc1234</Text>
             <Text className="text-white text-sm">May 20, 23</Text>
           </View>
           <Text className="text-white font-bold text-xl">BDT 40</Text>
         </View>
   
         {/* Route Section */}
         <View className="flex-row justify-between p-4 items-center">
           <View className="flex-1 items-start">
             <Text className="text-lg font-bold">Mirpur-12</Text>
             <Text className="text-gray-500 text-sm">Mirpur-12</Text>
             <Text className="text-black font-bold mt-2">10.40 AM</Text>
           </View>
   
           {/* Bus Icon and Distance */}
           <View className="flex-1 items-center">
             <Text className="text-gray-500">12 km</Text>
             <Text className="text-gray-500 mt-1">1 hour 20 Mins</Text>
           </View>
   
           <View className="flex-1 items-end">
             <Text className="text-lg font-bold">Shyamoli</Text>
             <Text className="text-gray-500 text-sm">Dhanmondi</Text>
             <Text className="text-black font-bold mt-2">12.00 PM</Text>
           </View>
         </View>
       </View>
      ))}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  item: {
    marginBottom: 10,
    padding: 15,
   
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    
  },
})

export default Passes

