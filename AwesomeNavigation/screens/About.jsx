import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const About = ({navigation,route}) => {
  const {takeData} = route.params
  const {myNumbr} = route.params
  return (
    <View>
      <Text>About</Text>
      <Text>{takeData}</Text>
      <Text>{myNumbr}</Text>
      <Text>{route.params.value}</Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({})