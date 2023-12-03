import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Home/Header'
import Category from '../components/Home/Category'
import PlaceList from '../components/Home/PlaceList'

const Home = () => {
  return (
    <View style={styles.pad}>
      <Header />
      <Category />
      <PlaceList  />
      {/* <Text>Home</Text> */}
    </View>
  )
}


const styles = StyleSheet.create({
  pad: {
    padding: 1
    // borderWidth: 3,
    // borderColor: 'green',
  }
})

export default Home