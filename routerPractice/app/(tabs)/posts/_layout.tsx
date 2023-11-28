import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack>
         <Stack.Screen name="index" options={{
          headerTitle: 'Posts',
        //   tabBarLabel: 'posts',
        //   headerShown: false,
        }}/>
         <Stack.Screen name="[id]" options={{
          headerTitle: 'Posts Details',
        //   tabBarLabel: 'posts',
        //   headerShown: false,
        }}/>
    </Stack>
  )
}

export default _layout

