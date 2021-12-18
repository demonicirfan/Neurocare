import { VStack, Text, Image } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { logo } from '../../../assets/Images/profile.png';
const ProfileCard = () => {
  return (
    <TouchableOpacity>
      <VStack
        space='3'
        alignItems='center'
        bg={'white'}
        shadow={'6'}
        borderRadius={'xl'}
        p={2}
      >
        <Image src={logo} alt='Alternate Text' size='xl' />
        <Text fontSize={'xl'}>Profile</Text>
      </VStack>
    </TouchableOpacity>
  );
};

export default ProfileCard;
