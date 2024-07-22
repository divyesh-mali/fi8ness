import { View, Text, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native-web';
import { Image } from 'expo-image'; 

export default function ExercisesList(data) {
    const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercises</Text>

      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item, index }) => <ExerciseCard router={router} index={index} item={item} />}
      />
    </View>
  )
}

const ExerciseCard = (item, router, index) => {
    return (
        <View>
            <View>
                <TouchableOpacity onPress={ () => router.push({pathname: '/exerciseDetails', params: item}) } className="flex py-3 space-y-2">
                    <View className="bg-neutral-200 shadow rounded-[25px]">
                        <Image
                            source={{uri: item.gifUrl}}
                            contentFit='cover'
                            style={{width: wp(44), height: hp(52)}}
                            className="rounded-[25px]"
                        />
                    </View>

                    <Text
                        style={{fontSize: hp(1.7)}}
                        className="text-neutral-700 font-semibold ml-1 tracking-wide"
                    >
                        {
                            item?.name?.length>20 ? item.name.slice(0, 20) + '...' : item.name // This basically checks if the length of the name is greater than 20 characters, then it will slice the name to 20 characters and add '...' at the end of the name.
                        }

                    </Text>

                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      marginHorizontal: 16,
    },
    title: {
      fontSize: hp(3),
      fontWeight: '600',
      color: '#4B5563',
    }
})