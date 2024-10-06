import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Alert,
    Platform,
    StatusBar,
    ImageBackground,
} from "react-native";
import React, { useState } from 'react';
import Map from "../../components/Map/Map";
import MapViewDirections from 'react-native-maps-directions';



const Track = () => {
    



    const [region, setRegion] = useState({
        latitude: 19.046362226954,
        longitude: 72.871155998075,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
    });
    return (
        <SafeAreaView
            style={[
                styles.safeArea,
                {
                    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, // Use StatusBar.currentHeight
                },
            ]}
        >
            <StatusBar
                barStyle="dark-content"
                translucent
                backgroundColor="transparent"
            />
            <View className='flex items-center justify-center'>
                <Map setRegion={setRegion} region={region}/>
            </View>
        </SafeAreaView>

    )
}

export default Track

const styles = StyleSheet.create({})