import { useNavigation } from '@react-navigation/native';
import { VStack, Text } from 'native-base';
import React from 'react';
import { Pressable, Image } from 'react-native';

import { Dimensions } from 'react-native';
var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

const WellnessCard = () => {
  const navigation = useNavigation();
  const onPressWellnessCard = () => {
    navigation.navigate('Wellness');
  };

  return (
    <Pressable onPress={onPressWellnessCard}>
      <VStack
        space='3'
        alignItems='center'
        bg={'white'}
        borderRadius={'xl'}
        px={width * 0.07}
        py={3}
        style={{
          shadowColor: 'gray',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          elevation: 8,
        }}
      >
        <Image
          source={require('./welness.png')}
          style={{ width: width * 0.23, height: width * 0.23, margin: 6 }}
        />

        <Text fontSize={'xl'} fontWeight={'500'} fontFamily={'Poppins'}>
          Wellness
        </Text>
      </VStack>
    </Pressable>
  );
};

export default WellnessCard;
