import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Register = () => {
  return (
    <View style={styles.Constainer}>
      <Text>Register</Text>
      <Link href="/Login" asChild>
        <Button title="Login Page" />
      </Link>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  Constainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})