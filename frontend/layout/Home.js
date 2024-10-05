// import React from 'react';
// import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import { Search, Menu, Ticket, User } from 'react-native-feather';

// const Home = () => {
//   return (
//     <SafeAreaView className="flex-1 bg-white">
//       <StatusBar barStyle="dark-content" backgroundColor="white" />
      
//       {/* Main Container */}
//       <View className="flex-1">
//         {/* Header with Search */}
//         <View className="absolute top-0 z-10 w-full px-4 pt-2 flex-row items-center">
//           {/* Menu Button */}
//           <TouchableOpacity className="p-2">
//             <Menu stroke="#000" width={24} height={24} />
//           </TouchableOpacity>
          
//           {/* Search Bar */}
//           <View className="flex-1 mx-2 bg-white rounded-full shadow-sm flex-row items-center px-4 h-12">
//             <Search stroke="#666" width={20} height={20} />
//             <TextInput
//               className="flex-1 ml-2 text-gray-700"
//               placeholder="Where to?"
//               placeholderTextColor="#666"
//             />
//           </View>
//         </View>

//         {/* Map View */}
//         <MapView
//           className="flex-1 w-full h-full"
//           initialRegion={{
//             latitude: 37.78825,
//             longitude: -122.4324,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           }}
//         >
//           {/* Add markers for bus stops */}
//           <Marker
//             coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
//             // image={require('../../assets/images/bus-stop.png')}
//           />
//           <Marker
//             coordinate={{ latitude: 37.78525, longitude: -122.4354 }}
//             // image={require('../../assets/images/bus-stop.png')}
//           />
//         </MapView>

//         {/* Bottom Navigation */}
//         <View className="absolute bottom-0 w-full bg-white border-t border-gray-200">
//           <View className="flex-row justify-around items-center h-16 px-4">
//             <TouchableOpacity className="items-center">
//               <Home stroke="#4169E1" width={24} height={24} />
//               <Text className="text-xs mt-1 text-blue-600">Home</Text>
//             </TouchableOpacity>
            
//             <TouchableOpacity className="items-center">
//               <Ticket stroke="#666" width={24} height={24} />
//               <Text className="text-xs mt-1 text-gray-600">Ticket</Text>
//             </TouchableOpacity>
            
//             <TouchableOpacity className="items-center">
//               <View className="w-14 h-14 bg-blue-600 rounded-full items-center justify-center -mt-5">
//                 <Ticket stroke="#FFF" width={24} height={24} />
//               </View>
//             </TouchableOpacity>
            
//             <TouchableOpacity className="items-center">
//               <Ticket stroke="#666" width={24} height={24} />
//               <Text className="text-xs mt-1 text-gray-600">Ticket</Text>
//             </TouchableOpacity>
            
//             <TouchableOpacity className="items-center">
//               <User stroke="#666" width={24} height={24} />
//               <Text className="text-xs mt-1 text-gray-600">Profile</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Home;



import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})