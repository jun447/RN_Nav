import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const One = () => {
  const route = useRouter()
  return (
    <View>
      <Text style={{fontSize:20}} >First Tab</Text>
      <Button title="Go Home" onPress={()=>route.back()} />
    </View>
  )
}

export default One