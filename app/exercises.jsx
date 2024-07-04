import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function exercises() {
  const router = useRouter();
  const item = useLocalSearchParams();
  console.log('got item: ', item)
  return (
    <View className="mt-20">
      <Text>exercises</Text>
      <TouchableOpacity onPress={() => router.back()}>
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  )
}

