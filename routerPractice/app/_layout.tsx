import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { useRouter } from 'expo-router'

const _layout = () => {
    const route = useRouter()
  return (
    <Stack>
        <Stack.Screen name="index" options={{
            title: 'Home',
            headerStyle: {
                backgroundColor: '#f4511e',
            },
        }} />
        <Stack.Screen name="register/index" options={{
            title: 'Register',
            headerRight: () => (
                <Button
                    onPress={() => route.push('/Login')}
                    title="Login"
                    color="black"
                />
            ),
            headerStyle: {
                backgroundColor: 'orange',
            },
        }} />
        <Stack.Screen name="Login" options={{
            title: 'Login',
            presentation: 'modal'
        }} />
        <Stack.Screen name="[missing]" options={{
            title: '404',
            headerStyle: {
                backgroundColor: 'orange',
            },
        }} />
        <Stack.Screen name="(tabs)" options={{
           headerShown: false,
        }} />
        
    </Stack>      
  )
}

export default _layout

const styles = StyleSheet.create({})