import { useNavigation } from '@react-navigation/native';
import { VStack, Text } from 'native-base';
import React from 'react';
import { Image, Pressable } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { Dimensions } from 'react-native';
var width = Dimensions.get('window').width;

const LocationCard = () => {
  const navigation = useNavigation();
  const onPressProfileCard = () => {
    navigation.navigate('Reminders');
  };
  return (
    <Shadow
      distance={'22'}
      offset={[0, 20]}
      startColor='#00000010'
      finalColor='#00000000'
    >
      <Shadow
        distance={'10'}
        offset={[0, 5]}
        startColor='#00000004'
        finalColor='#00000000'
      >
        <Pressable onPress={onPressProfileCard}>
          <VStack
            space='3'
            alignItems='center'
            bg={'white'}
            borderRadius={'3xl'}
            px={width * 0.07}
            py={3}
          >
            <Image
              source={require('./location.png')}
              style={{ width: width * 0.23, height: width * 0.23, margin: 6 }}
            />
            <Text fontSize={'xl'} fontWeight={'500'} fontFamily={'Poppins'}>
              Location
            </Text>
          </VStack>
        </Pressable>
      </Shadow>
    </Shadow>
  );
};

export default LocationCard;
