import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Modal,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
  Text,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-feather";
import Header from "./BaseHeader";

const SearchModal = ({ isModalVisible, closeSearchModal }) => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (!isModalVisible) {
      setSearchText("");
    }
  }, [isModalVisible]);

  const handleSearch = (text) => {
    setSearchText(text);
    // Your search logic here
  };

  // Dummy data for recents
  const recentPlaces = [
    {
      id: 1,
      title: "Vashi to Ghatkopar",
      subtitle: "Mumbai , India",
    },
    {
      id: 2,
      title: "Vashi to Ghatkopar",
      subtitle: "Mumbai , India",
    },
    {
      id: 3,
      title: "Vashi to Ghatkopar",
      subtitle: "Mumbai , India",
    },
  ];

  return (
    <Modal
      visible={isModalVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={closeSearchModal}
    >
      <StatusBar barStyle="light-content" backgroundColor="#52525B" />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}>
            <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
              <View style={{ paddingHorizontal: 16, paddingVertical: 16 }} className='bg-[#52525B]'>
                <Header closeSearchModal={closeSearchModal} />

                <View className='px-6'>
                  {/* From Input */}
                  <View
                    style={{
                      flexDirection: "row",
                      backgroundColor: "#F4F5F9",
                      padding: 12,
                      borderRadius: 8,
                      marginTop: 16,
                    }}
                    className='justify-center items-center'
                  >
                    <Icon.ArrowUp height="20" width="20" stroke="gray" />
                    <TextInput
                      placeholder="From"
                      style={{ flex: 1, marginLeft: 8 }}
                      value={searchText}
                      onChangeText={handleSearch}
                      className='text-lg'
                      autoFocus
                    />
                  </View>

                  {/* To Input */}
                  <View
                    style={{
                      flexDirection: "row",
                      backgroundColor: "#F4F5F9",
                      padding: 12,
                      borderRadius: 8,
                      marginTop: 16,
                    }}
                    className='justify-center items-center'
                  >
                    <Icon.ArrowDown height="20" width="20" stroke="gray" />
                    <TextInput
                      placeholder="To"
                      style={{ flex: 1, marginLeft: 8 }}
                      value={searchText}
                      onChangeText={handleSearch}
                      className='text-lg'
                      autoFocus
                    />
                  </View>

                  {/* Choose on Map */}
                  <View
                    style={{
                      flexDirection: "row",
                      backgroundColor: "#F4F5F9",
                      padding: 12,
                      borderRadius: 8,
                      marginTop: 16,
                    }}
                    className='justify-center items-center'
                  >
                    <TextInput
                      placeholder="Choose on map"
                      style={{ flex: 1, marginLeft: 8 }}
                      value={searchText}
                      onChangeText={handleSearch}
                      className='text-lg'
                      autoFocus
                    />
                    <Icon.ArrowRight height="20" width="20" stroke="gray" />
                  </View>
                </View>
              </View>

              {/* Home & Office Section */}
              <View style={{ paddingHorizontal: 16, marginTop: 24 }}>
                <Text style={{ fontWeight: "bold", fontSize: 16, marginBottom: 8 }}>Your Places</Text>
                
                {/* Home Section */}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingVertical: 12,
                    paddingHorizontal: 16,
                    backgroundColor: "#F9F9F9",
                    borderRadius: 8,
                    marginBottom: 8,
                    borderWidth: 1,
                    borderColor: "#E5E5E5",
                  }}
                >
                  <TouchableOpacity>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Icon.Home height="20" width="20" stroke="black" />
                    <View style={{ marginLeft: 12 }}>
                      <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                        Home
                      </Text>
                      <Text style={{ color: "#888", fontSize: 14 }}>
                        Vashi, Mumbai, India
                      </Text>
                    </View>
                  </View>
                  </TouchableOpacity>
                </View>

                {/* Office Section */}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingVertical: 12,
                    paddingHorizontal: 16,
                    backgroundColor: "#F9F9F9",
                    borderRadius: 8,
                    marginBottom: 8,
                    borderWidth: 1,
                    borderColor: "#E5E5E5",
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Icon.Briefcase height="20" width="20" stroke="black" />
                    <View style={{ marginLeft: 12 }}>
                      <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                        Office
                      </Text>
                      <Text style={{ color: "#888", fontSize: 14 }}>
                        Ghatkopar, Mumbai, India
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              {/* Recents Section */}
              <View style={{ paddingHorizontal: 16, marginTop: 24 }}>
              <TouchableOpacity className="absolute -bottom-[10%] left-[75%] z-10">
                <View className="w-20 h-20 bg-blue-500 rounded-full items-center justify-center shadow-lg">
                    <Text className='text-white font-semibold'>
                    <Icon.ArrowRight height="30" width="30" stroke="white" />
                    </Text>
                </View>
            </TouchableOpacity>
                <Text style={{ fontWeight: "bold", fontSize: 16, marginBottom: 8 }}>Recents</Text>
                <ScrollView>
                  {recentPlaces.map((place) => (
                    <View
                      key={place.id}
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingVertical: 12,
                        paddingHorizontal: 16,
                        backgroundColor: "#F9F9F9",
                        borderRadius: 8,
                        marginBottom: 8,
                        borderWidth: 1,
                        borderColor: "#E5E5E5",
                      }}
                    >
                      <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Icon.MapPin height="20" width="20" stroke="black" />
                        <View style={{ marginLeft: 12 }}>
                          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                            {place.title}
                          </Text>
                          <Text style={{ color: "#888", fontSize: 14 }}>
                            {place.subtitle}
                          </Text>
                        </View>
                      </View>
                    </View>
                  ))}
                </ScrollView>
              </View>
            </SafeAreaView>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default SearchModal;
