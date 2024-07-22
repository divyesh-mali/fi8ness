import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { bodyParts } from '../constants';
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function BodyParts() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercises</Text>

      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={item => item.title}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item, index }) => <BodyPartCard navigation={navigation} index={index} item={item} />}
      />
    </View>
  );
}

const BodyPartCard = ({ item, navigation, index }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('exercises', { item })}
        style={styles.card}
      >
        <Image
          source={item.image}
          resizeMode="cover"
          style={styles.image}
        />
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.9)']}
          style={styles.gradient}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />
        <Text style={styles.cardText}>
          {item?.title}
        </Text>
      </TouchableOpacity>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  title: {
    fontSize: hp(3),
    fontWeight: '600',
    color: '#4B5563',
  },
  flatListContent: {
    paddingBottom: 50,
    paddingTop: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  card: {
    width: wp(44),
    height: wp(52),
    justifyContent: 'flex-end',
    padding: 16,
    marginBottom: 16,
  },
  image: {
    width: wp(44),
    height: wp(52),
    borderRadius: 35,
    position: 'absolute',
    // margin: 10
  },
  gradient: {
    width: wp(44),
    height: wp(15),
    position: 'absolute',
    bottom: 0,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  cardText: {
    fontSize: hp(2.3),
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
});
