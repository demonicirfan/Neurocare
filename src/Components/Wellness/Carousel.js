import { useNavigation } from '@react-navigation/native';
import { Center, Box, FlatList, Pressable, Text, Image } from 'native-base';
import React from 'react';
import data from './Data';

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
          resizeMode='contain'
          w={'40'}
          h={'48'}
        />
      </Pressable>
    );
  };

  return (
    <Center mb={'8'} h={'56'} pb={'4'}>
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
