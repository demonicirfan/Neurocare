import React from 'react';
import { VStack, Text, Center } from 'native-base';
import { Dimensions, Image } from 'react-native';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

const RootScreen = () => {
  return (
    <VStack space='5' w={'full'} h={'full'} bg={'neurocare.orange1'}>
      <Center mx={'auto'} my={'auto'}>
        <Image
          source={require('./neurocare.png')}
          style={{
            width: width * 0.3,
            height: width * 0.3,
            margin: 6,
          }}
        />
      </Center>
      <Center mb={'8'}>
        <Text fontSize={'2xl'} fontWeight={'300'} color={'gray.400'}>
          neuro<Text color={'neurocare.blue'}>care</Text>
        </Text>
      </Center>
    </VStack>
  );
};

export default RootScreen;
