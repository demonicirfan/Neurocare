import { Avatar, HStack, Text, VStack } from 'native-base';
import React from 'react';

const ProfileHome = () => {
  return (
    <HStack
      w='100%'
      justifyContent={'space-between'}
      mx={'auto'}
      maxW={'72'}
      mt={'16'}
      borderRadius='md'
      padding={'4'}
      mb={'4'}
    >
      <VStack>
        <Text fontSize={'2xl'}>Hey</Text>
        <Text fontSize={'3xl'} bold lineHeight={'32'}>
          Tessa !
        </Text>
        <Text fontSize={'md'}>
          Caretaker <Text color={'blue.600'}>Freny</Text>
        </Text>
      </VStack>
      <Avatar
        size={'20'}
        source={{
          uri: 'https://images.unsplash.com/photo-1552255147-82aa08ec13a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4ODI3MzYwfHxlbnwwfHx8fA%3D%3D&w=1000&q=80',
        }}
        ss
      ></Avatar>
    </HStack>
  );
};

export default ProfileHome;
