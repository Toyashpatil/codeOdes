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
    TouchableWithoutFeedback,
} from "react-native";
import React from 'react'
import Arrow from '../../assets/images/arrowSide.svg'

const Wallet = ({navigation}) => {
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
            <View>
                <View className='flex items-center justify-start  h-[100vh]'>
                    <View className='bg-[#2B2B2B] h-[180px] rounded-br-[50px] rounded-bl-[50px] w-full flex items-center justify-start p-2 '>
                    <View className='pt-4 flex justify-center items-center'>
        <Text className='text-white text-lg text-blue font-bold'>Wallet</Text>
      </View>
                        <View className='space-y-4 pt-6'>
                            
                            <View className='space-y-3'>
                                <View className='flex items-center justify-center'>
                                    <Text className='text-md text-white'>Total balance</Text>
                                </View>
                                <View className='flex items-center justify-center'>
                                    <Text className=' text-3xl font-bold text-white'>Rs.1000</Text>
                                </View>
                            </View>

                        </View>
                    </View>

                    <View className='w-full pl-5 pr-5'>
            <TouchableWithoutFeedback ><View className='flex-row justify-between items-center pb-6 pt-6 border-b-[0.5px] border-solid border-darkGrey'>
                <View  className='flex-row justify-center items-center space-x-3'>
                    
                    <Text className='text-black font-bold text-sm'>Buy Package</Text>
                </View>
                <View className='items-center justify-center'>
                  
                </View>
            </View></TouchableWithoutFeedback>
            <TouchableWithoutFeedback><View className='flex-row justify-between items-center pb-6 pt-6 border-b-[0.5px] border-solid border-darkGrey'>
                <View  className='flex-row justify-center items-center space-x-3'>
                    
                    <Text className='text-black font-bold text-sm'>Recharge balance</Text>
                </View>
                <View className='items-center justify-center'>
                    
                </View>
            </View></TouchableWithoutFeedback>
           
            <TouchableWithoutFeedback><View className='flex-row justify-between items-center pb-6 pt-6 '>
                <View  className='flex-row justify-center items-center space-x-3'>
                    {/* <Logout></Logout> */}
                    <Text className='text-black font-bold text-sm'>Refund</Text>


                </View>
                
            </View></TouchableWithoutFeedback>
        </View>
                </View>

            </View>


        </SafeAreaView>
    )
}

export default Wallet

const styles = StyleSheet.create({})