import { Center, Box, FlatList, Pressable, Text, Image } from 'native-base';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import data from './Data';

const RenderItem = ({ item }) => {
  return (
    <Center>
      <Image
        rounded={'2xl'}
        alt='alt text'
        source={{ uri: item.image }} //using uri property
        resizeMode='contain'
        w={'40'}
        h={'48'}
      />
    </Center>
  );
};
const WellnessScreen = () => {
  return (
    <Center my={'8'} h={'56'} pb={'4'}>
      <FlatList horizontal data={data} renderItem={RenderItem} />
    </Center>
  );
};

export default WellnessScreen;
/*
import { useNavigation } from '@react-navigation/native';
import { Center, Box, FlatList, Pressable, Text, Image } from 'native-base';
import React from 'react';
import data from './Data';

const WellnessScreen = () => {
  const navigation = useNavigation();

  return (
    <Center my={'8'} h={'56'} pb={'4'}>
      <FlatList
        horizontal
        data={data}
        renderItem={(item) => {
          // <Pressable
          //   onPress={() => {
          //     navigation.navigate('Detail', item.images);
          //   }}
          // >
          <Center>
            <Image
              rounded={'2xl'}
              alt='alt text'
              source={{ uri: item.image }}
              resizeMode='contain'
              w={'40'}
              h={'48'}
            />
          </Center>;
          // </Pressable>;
        }}
      />
    </Center>
  );
};

export default WellnessScreen;
*/
