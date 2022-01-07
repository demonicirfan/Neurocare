import React from 'react';
import { HStack, Text, VStack } from 'native-base';
import GoBack from './GoBack';

const Header = (props) => {
  return (
    <HStack
      space='3'
      alignItems='center'
      justifyContent='space-between'
      width={'100%'}
      px={'4'}
      py={'4'}
    >
      <VStack>
        <Text fontSize='2xl' fontWeight={'400'} fontFamily={'Poppins'}>
          {props.title}
        </Text>
        {props.phoneNumber && (
          <Text color={'blue.500'} fontFamily={'Poppins'}>
            {props.phoneNumber}
          </Text>
        )}
      </VStack>
      <GoBack />
    </HStack>
  );
};

export default Header;
