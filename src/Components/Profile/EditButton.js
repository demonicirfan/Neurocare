import { Pressable, Text } from 'native-base';
import React from 'react';

const LogoutButton = () => {
  return (
    <Pressable
      bg={'yellow.500'}
      w={'20'}
      h={'8'}
      ml={'8'}
      mr={'80%'}
      rounded={'full'}
      alignItems={'center'}
      onPress={() => {
        console.warn('edit pressed');
      }}
    >
      <Text fontSize={'2xl'} color={'white'}>
        Edit
      </Text>
    </Pressable>
  );
};

export default LogoutButton;
