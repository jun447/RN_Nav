import { Pressable, StyleSheet, Text, View} from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      {/* create pressable to go to about screen */}
      <Pressable 
        onPress={() => navigation.navigate('About',{takeData: 'Hello from Home'})}
        style={styles.button}
      >
        <Text>Go to About</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 10
  }
})

export default Home