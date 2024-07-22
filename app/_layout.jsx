import { View, Text, LogBox } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function _layout() {
  LogBox.ignoreLogs(["Warning: Failed prop type"]) // It is used to ignore log notification by message
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <Stack
        screenOptions={{
            headerShown: false
        }}
    >
       
      <Stack.Screen name="exercises" options={{
        presentation: 'fullScreenModal'
      }} />

      <Stack.Screen name="exerciseDetails" options={{
        presentation: 'modal'
      }} />
      </Stack>
    </GestureHandlerRootView>
  )
}