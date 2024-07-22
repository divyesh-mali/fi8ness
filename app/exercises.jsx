import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { demoExercises } from '../constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import ExercisesList from '../components/ExercisesList';

export default function exercises() {
  const router = useRouter();
  const [exercises, setExercises] = useState([]) // useState(demoExercises) // I'm commenting this line because I'm fetching exercises from API and this function basically works on dummy data
  const item = useLocalSearchParams();
  // console.log('got item: ', item);

  useEffect(() => {
    if(item) getExercises(item.name);
  }, [item]);

  const getExercises = async (bodypart) => {
    let data = await fetchExercisesByBodyPart(bodypart);
    // console.log('Got data: ', data);
    setExercises(data);
  }

  // console.log('item: ', item)
  return (
    <SafeAreaView>
    <ScrollView>
      <StatusBar style="light"/>
      <Image 
          source={require('../assets/images/lowerLegs.png')} // Here, image is not being fetched properly by "item.image" so I'm adding a constant image for all exercises ( for now )
          // source={item.image}
          style={{width: wp(100), height: hp(45)}}
          className="rounded-b-[40px]"
        />
        {/* <Image className="h-full w-full absolute" source={require('../assets/images/welcome.png')} /> */}
        <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, sequi?</Text>
        <TouchableOpacity
          onPress={() => router.back()}
          className="bg-rose-500 mx-4 absolute flex justify-center items-center pr-1 rounded-full"
          style={{height: hp(5.5), width: hp(5.5), marginTop: hp(7)}}
        >
            <Ionicons name="arrow-back-outline" size={hp(4)} color="gray" />
        </TouchableOpacity>
      
      <View className="mx-4 space-y-3 mt-4">

        {/* Here also, item.name is not being fetched properly so I'm adding a dash line ____  */}
        <Text style={{fontSize: hp(3)}} className="font-semibold text-neutral-700"> 
         {item.name} Demo exercises 
        </Text>

        <View className="mb-10">
          {/* <ExercisesList data={exercises} /> */}
          <Text>
          </Text>
        </View>

      </View>

    </ScrollView>
    </SafeAreaView>      
  )
}