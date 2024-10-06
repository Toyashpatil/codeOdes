import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Animated,
  Platform,
  ImageBackground,
} from "react-native";

import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Navbar from "../../components/Navbar/Navbar";
import SearchModal from "./SearchModal";
import Map from "../../components/Map/Map";

const Home = () => {
  const navigation = useNavigation();
  const { width: screenWidth } = Dimensions.get("window");
  const scrollY = useRef(new Animated.Value(0)).current;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { top, bottom } = useSafeAreaInsets();

  const openSearchModal = () => {
    setIsModalVisible(true);
  };

  const closeSearchModal = () => {
    setIsModalVisible(false);
  };
  const [region, setRegion] = useState({
    latitude: 19.046362226954,
    longitude:72.871155998075,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });

    const handleNavigateToProfile = () => {
      navigation.navigate('Profile');
    };
  return (
    <>
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === "ios" ? top : StatusBar.currentHeight,
          paddingBottom: Platform.OS === "ios" ? 0 : bottom,
        }}
        className="bg-white flex-1"
      >

        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
          <View className="flex-row items-center space-x-2 px-4 py-2">
            <TouchableOpacity>
              <Icon.Menu
                width={24}
                height={24}
                strokeWidth={3}
                stroke="gray"
              />
            </TouchableOpacity>
            <TouchableOpacity
              className="flex-row flex-1 bg-[#F4F5F9] items-center p-3 rounded-lg shadow"
              onPress={openSearchModal}
            >
              <Icon.Search height={20} width={20} stroke="gray" />
              <Text className="flex-1 ml-2">Where to?</Text>
            </TouchableOpacity>

          </View>
        
        <View className='flex items-center justify-center '>
          <Map region={region} setRegion={setRegion} />

        </View>
        {/* Footer */}
        <View
          style={{
            position: 'absolute', // Absolute positioning
            bottom: 0, // Align to the bottom
            left: 0,
            right: 0, // Stretch across the entire width
            // paddingBottom: bottom ? bottom : 10, // Safe area padding for bottom
            backgroundColor: 'black', // Adjust color to your preference
          }}
        >
          <Navbar />
        </View>
        <SearchModal
        isModalVisible={isModalVisible}
        closeSearchModal={closeSearchModal}
      />
      </View>
    </>
  );
};

export default Home;
