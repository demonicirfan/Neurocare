import React from 'react';
import { Text, VStack, HStack, Avatar, FlatList } from 'native-base';
import Data from '../../../../Data/ProfileData';
import { Dimensions } from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const Details = () => {
  const renderItem = (item) => (
    <HStack
      w={width * 0.6}
      mx={'auto'}
      mt={height * 0.012}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Avatar
        size={'sm'}
        source={{
          uri: 'https://pps.whatsapp.net/v/t61.24694-24/s96x96/262132498_6429600853747731_2203035995679770830_n.jpg?ccb=11-4&oh=da6dfb20df301ddb97cf7700e367f2f3&oe=61C58226',
        }}
      >
        X
      </Avatar>

      <Text w={width * 0.38} fontSize={'xl'}>
        Hello Hii
      </Text>
      <Text fontSize={'xl'}>123</Text>
    </HStack>
  );
  return (
    <VStack space='2' w={width * 0.8} mx={'auto'} py={height * 0.09}>
      <Text fontSize={'xl'}>Detail</Text>
      <FlatList data={Data} renderItem={renderItem} />
    </VStack>
  );
};

export default Details;
