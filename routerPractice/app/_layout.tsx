import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
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
            headerStyle: {
                backgroundColor: 'orange',
            },
        }} />
        <Stack.Screen name="[missing]" options={{
            title: 'Page Not Found',
            headerStyle: {
                backgroundColor: 'orange',
            },
        }} />
    </Stack>      
  )
}

export default _layout

const styles = StyleSheet.create({})