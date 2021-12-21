import { Center, Flex } from 'native-base';
import React from 'react';
import { Dimensions } from 'react-native';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

const DiagnosisStill = () => {
  return (
    <Flex
      justify={'center'}
      align={'center'}
      w={width * 0.88}
      height={width * 0.47}
      bg={'blue.600'}
      borderRadius={'2xl'}
    >
      <Center
        w={'110px'}
        h={'110px'}
        bg='white'
        borderRadius={'full'}
        position={'absolute'}
        opacity={30}
      />
      <Center
        w={'90px'}
        h={'90px'}
        bg='white'
        borderRadius={'full'}
        position={'absolute'}
        opacity={50}
      />
      <Center
        w={'70px'}
        h={'70px'}
        bg='white'
        borderRadius={'full'}
        position={'absolute'}
      />
    </Flex>
  );
};

export default DiagnosisStill;
