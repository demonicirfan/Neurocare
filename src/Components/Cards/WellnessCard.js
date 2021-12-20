import { VStack, Text } from 'native-base';
import React from 'react';
import { Pressable, Image } from 'react-native';

const WellnessCard = () => {
  const onPressWellnessCard = () => {
    console.warn('welness card pressed');
  };

  return (
    <Pressable onPress={onPressWellnessCard}>
      <VStack
        space='3'
        alignItems='center'
        bg={'white'}
        shadow={'6'}
        borderRadius={'xl'}
        p={5}
      >
        <Image
          source={require('./welness.png')}
          style={{ width: 72, height: 72, margin: 6 }}
        />

        <Text fontSize={'xl'} fontWeight={'700'}>
          Wellness
        </Text>
      </VStack>
    </Pressable>
  );
};

export default WellnessCard;
