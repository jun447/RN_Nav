import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Home = () => {
  return (
    <View style={styles.Constainer} >
      <Text>Home</Text>
      {/* link property */}
      <Link href="/register" asChild>
        <Button title="Register" />
      </Link>
      <Link href="/One" asChild>
        <Button title="One" onPress={()=>(console.log('HAI'))} />
      </Link>
      {/* <Link href="/Two" asChild>
        <Button title="Two" onPress={()=>(console.log('HAI Two'))} />
      </Link> */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  Constainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})