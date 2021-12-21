import { Center, VStack, Text } from 'native-base';
import React from 'react';

const _bgColor = '#EBEBEB';
const Results = () => {
  return (
    <VStack
      bg={_bgColor}
      borderColor={'white'}
      borderWidth={'4px'}
      borderRadius={'28'}
      h='100%'
      alignItems={'center'}
      space={'8'}
      pt={'16'}
    >
      <Text
        fontSize='6xl'
        color={'neurocare.orange3'}
        fontFamily={'Poppins'}
        fontWeight={'700'}
      >
        15/30
      </Text>
      <Center bg='blue.600' px='12' rounded={'2xl'} py={'4'} shadow={'4'}>
        <Text fontSize='lg' color={'white'} fontFamily={'Poppins'}>
          Mild Cognitive Impairment
        </Text>
      </Center>
      <Center
        bg='#FFDD7B'
        px='8'
        py={'7px'}
        rounded={'full'}
        fontFamily={'Poppins'}
      >
        <Text fontSize='lg'>Back Home</Text>
      </Center>
    </VStack>
  );
};

export default Results;
