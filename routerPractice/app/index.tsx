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