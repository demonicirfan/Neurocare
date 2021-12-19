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
        shadow={'4'}
        borderRadius={'xl'}
        p={2}
      >
        <Image
          source={require('./welness.png')}
          style={{ width: 120, height: 120 }}
        />

        <Text fontSize={'xl'}>Wellness</Text>
      </VStack>
    </Pressable>
  );
};

export default WellnessCard;
