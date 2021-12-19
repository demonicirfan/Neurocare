import { Center, Flex } from 'native-base';
import React from 'react';

const DiagnosisStill = () => {
  return (
    <Flex
      justify={'center'}
      align={'center'}
      w={'280px'}
      height={'140px'}
      bg={'blue.600'}
      borderRadius={'2xl'}
    >
      <Center
        w={'100px'}
        h={'100px'}
        bg='white'
        borderRadius={'full'}
        position={'absolute'}
        opacity={30}
      />
      <Center
        w={'80px'}
        h={'80px'}
        bg='white'
        borderRadius={'full'}
        position={'absolute'}
        opacity={50}
      />
      <Center
        w={'60px'}
        h={'60px'}
        bg='white'
        borderRadius={'full'}
        position={'absolute'}
      />
    </Flex>
  );
};

export default DiagnosisStill;
