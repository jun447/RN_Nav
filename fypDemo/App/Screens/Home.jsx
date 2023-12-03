import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Home/Header'

const Home = () => {
  return (
    <View>
      <Header styles={styles.pad} />
      {/* <Text>Home</Text> */}
    </View>
  )
}


const styles = StyleSheet.create({
  pad: {
    // padding: 70,
    // borderWidth: 3,
    // borderColor: 'green',
  }
})

export default Home