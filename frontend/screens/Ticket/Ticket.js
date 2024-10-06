import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SwitchTab from '../../components/Ticket/SwitchTab'

const Ticket = () => {
  return (
    <View>
        <View className="h-full w-full">
        <View className='pt-10 flex justify-center items-center'>
            <Text className='text-lg text-black font-bold'>Tickets</Text>
        </View>
        
      <SwitchTab/></View>
    </View>
  )
}

export default Ticket

const styles = StyleSheet.create({})