import React from 'react';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Center, Box, FlatList, Pressable, Text, Image } from 'native-base';
import data from './Data';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;
const _pos = width * 0.45;
const WellnessScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <Pressable
        onPress={() => {
          navigation.navigate('Detail', { data: item });
        }}
      >
        <Image
          rounded={'2xl'}
          alt='alt text'
          source={{ uri: item.image }}
          resizeMode='cover'
          w={width * 0.45}
          h={height * 0.27}
          m={width * 0.02}
        />
        <Center
          bg='neurocare.green'
          px='5'
          py='1.5'
          rounded='full'
          position={'absolute'}
          bottom={'0.5'}
          left={_pos * 0.2}
        >
          {item.name}
        </Center>
      </Pressable>
    );
  };

  return (
    <Center mb={height * 0.1} h={height * 0.33} py={'2'}>
      <FlatList
        data={data}
        horizontal
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </Center>
  );
};

export default WellnessScreen;
