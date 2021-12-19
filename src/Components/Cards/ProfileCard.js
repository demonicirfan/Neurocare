import { VStack, Text } from 'native-base';
import React from 'react';
import { Image, Pressable } from 'react-native';

const ProfileCard = () => {
  const onPressProfileCard = () => {
    console.warn('Profile card pressed');
  };
  return (
    <Pressable onPress={onPressProfileCard}>
      <VStack
        space='3'
        alignItems='center'
        bg={'white'}
        shadow={'6'}
        borderRadius={'xl'}
        p={2}
      >
        <Image
          source={require('./profile.png')}
          style={{ width: 80, height: 80, margin: 20 }}
        />
        <Text fontSize={'xl'}>Profile</Text>
      </VStack>
    </Pressable>
  );
};

export default ProfileCard;
