import { StyleSheet, View, Dimensions } from 'react-native';
import React, { useState } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const { width, height } = Dimensions.get('window'); // Get the screen width

const styles = StyleSheet.create({
    container: {
        width: width * 1,
        height: height * 0.9,
        position: 'relative',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

const Map = ({ region, setRegion, children }) => {
    const origin = { latitude: 19.07658005351932, longitude: 72.88611828259432 };
    const destination = { latitude: 19.074998262764744, longitude: 72.89096771627878 };
    const GOOGLE_MAPS_APIKEY = 'AIzaSyAz7NQHTbY7Yfganu4Olls7M8gGH4jTbMk';

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={region}
                onRegionChangeComplete={(newRegion) => setRegion(newRegion)}
            >
                <Marker
                    coordinate={{
                        latitude: region.latitude,
                        longitude: region.longitude,
                    }}
                    title="Marker Title"
                    description="This is a description for the marker"
                />
                <MapViewDirections
                    origin={origin}
                    destination={destination}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    strokeColor="hotpink"
                    onError={(errorMessage) => {
                        console.log('Error with directions: ', errorMessage);
                    }}
                    onReady={(result) => {
                        console.log(`Distance: ${result.distance} km`);
                        console.log(`Duration: ${result.duration} min.`);
                    }}
                />
            </MapView>
        </View>
    );
};

export default Map;
