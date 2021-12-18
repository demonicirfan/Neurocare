import { VStack, Text, Image } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { logo } from '../../../assets/Images/welness.png';
const WellnessCard = () => {
  return (
    <TouchableOpacity>
      <VStack
        space='3'
        alignItems='center'
        bg={'white'}
        shadow={'4'}
        borderRadius={'xl'}
        p={2}
      >
        <Image src={logo} alt='Alternate Text' size='xl' />
        <Text fontSize={'xl'}>Wellness</Text>
      </VStack>
    </TouchableOpacity>
  );
};

export default WellnessCard;
