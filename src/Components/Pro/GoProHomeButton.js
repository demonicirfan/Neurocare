import { Center, HStack, Icon, Text, VStack } from 'native-base';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

var width = Dimensions.get('window').width;

const GoProHome = () => {
  return (
    <HStack
      space='25px'
      alignItems={'flex-start'}
      bg='white'
      p={'24px'}
      w={width * 0.85}
      mx='auto'
      rounded='3xl'
    >
      <Center bg={'orange.50'} rounded={'full'} w={'45px'} h={'45px'}>
        <Icon
          as={MaterialCommunityIcons}
          name='crown'
          color={'yellow.400'}
          size={'md'}
        />
      </Center>
      <VStack space='5'>
        <Text fontSize='xl' fontWeight={'600'} fontFamily={'Poppins'} w={'65%'}>
          Get unlimited access to everything
        </Text>
        <Center bg='neurocare.blue' py={'8px'} rounded={'full'} w={'118px'}>
          <Text fontSize='2xl' color={'white'} fontWeight={'600'}>
            Go Pro
          </Text>
        </Center>
      </VStack>
    </HStack>
  );
};

export default GoProHome;
