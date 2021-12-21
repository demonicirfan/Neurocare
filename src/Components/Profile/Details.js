import React from 'react';
import { Text, VStack, HStack, Avatar, FlatList } from 'native-base';
import Data from './Data';

const Details = () => {
  const renderItem = (item) => (
    <HStack
      w={'220px'}
      mx={'auto'}
      mt={'3'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Avatar
        size={'sm'}
        source={{
          uri: 'https://pps.whatsapp.net/v/t61.24694-24/s96x96/262132498_6429600853747731_2203035995679770830_n.jpg?ccb=11-4&oh=da6dfb20df301ddb97cf7700e367f2f3&oe=61C58226',
        }}
      >
        SS
      </Avatar>

      <Text w={'130px'} fontSize={'xl'}>
        Hello
      </Text>
      <Text fontSize={'xl'}>123</Text>
    </HStack>
  );
  return (
    <VStack space='2' w={'64'} mx={'auto'} py={'12'}>
      <Text fontSize={'xl'}>Detail</Text>
      <FlatList data={Data} renderItem={renderItem} />
    </VStack>
  );
};

export default Details;
