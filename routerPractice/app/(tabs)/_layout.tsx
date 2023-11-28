import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
    <Tabs>
       <Tabs.Screen name="One" options={{
          headerTitle: 'Onne',
          tabBarLabel: 'Onne',
        }}/>
       <Tabs.Screen name="Two" options={{
          headerTitle: 'Twne',
          tabBarLabel: 'Twne',
        }}/>
       <Tabs.Screen name="posts" options={{
          headerTitle: 'Posts',
          tabBarLabel: 'posts',
          headerShown: false,
        }}/>
    </Tabs>
  )
}

export default _layout