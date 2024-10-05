import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import TicketSlip from './TicketSlip';
import Passes from './Passes';

const SwitchTab = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
        }).start();
    }, [selectedIndex]);

    const handleIndexChange = (index) => {
        fadeAnim.setValue(0);
        setSelectedIndex(index);
    };

    return (
        <View style={styles.container}>
            <SegmentedControlTab
                values={["Ticket","Pass"]}
                selectedIndex={selectedIndex}
                onTabPress={handleIndexChange}
                tabsContainerStyle={styles.tabsContainer}
                tabStyle={styles.tabStyle}
                activeTabStyle={styles.activeTabStyle}
                tabTextStyle={styles.tabTextStyle}
                activeTabTextStyle={styles.activeTabTextStyle}
            />

            <Animated.View style={[styles.contentContainer, { opacity: fadeAnim }]}>
            {selectedIndex === 0 && <TicketSlip/> }
            {selectedIndex === 1 && <Passes/>}
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop:5
    },
    tabsContainer: {
        marginVertical: 20,
        height: 48,
    },
    tabStyle: {
       
        backgroundColor: '#FFFFFF',
    },
    activeTabStyle: {
        backgroundColor: '#3085FE',
    },
    tabTextStyle: {
        color: '#3085FE',
    },
    activeTabTextStyle: {
        color: 'white',
    },
    contentContainer: {
        marginTop: 0,
    },
});

export default SwitchTab;


