import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Post  = () => {
  return (
    <View style={styles.container} >
      <Link style={styles.text} href={"/posts/1"} >Post 1</Link>
      <Link style={styles.text} href={"/posts/2"} >Post 2</Link>
      <Link style={styles.text} href={"/posts/3"} >Post 3</Link>
    </View>
  )
}

export default Post 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "center",
    },
    text: {
        fontSize: 20,
        color: "black",
    }

})