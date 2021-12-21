import { Pressable, Text } from 'native-base';
import React from 'react';

const LogoutButton = () => {
  return (
    <Pressable
      bg={'blue.500'}
      w={'250'}
      mx={'auto'}
      rounded={'full'}
      alignItems={'center'}
      h={'10'}
      mt={'24'}
      onPress={() => {
        console.warn('logout pressed');
      }}
    >
      <Text fontSize={'2xl'} color={'white'} pt={'1'}>
        Logout
      </Text>
    </Pressable>
  );
};

export default LogoutButton;
