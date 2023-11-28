import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Page = () => {
    const { id } = useLocalSearchParams()
  return (
    <View>
      <Text>This post details page {id}</Text>
    </View>
  )
}

export default Page