import { Center, Flex } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';

const AudioHome = () => {
  return (
    <TouchableOpacity>
      <Flex
        justify={'center'}
        align={'center'}
        w={'85%'}
        bg={'blue.600'}
        py={8}
        mx={'auto'}
        mt={4}
        borderRadius={'xl'}
      >
        <Center w={20} h={20} bg='white' borderRadius={'full'}>
          <Center w={24} h={24} bg='white' borderRadius={'full'} opacity={'30'}>
            <Center
              w={32}
              h={32}
              bg='white'
              borderRadius={'full'}
              opacity={'25'}
            />
          </Center>
        </Center>
      </Flex>
    </TouchableOpacity>
  );
};

export default AudioHome;
