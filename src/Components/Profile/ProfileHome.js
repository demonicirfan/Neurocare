import { Avatar, HStack, Text, VStack } from 'native-base';
import React from 'react';

import { Dimensions } from 'react-native';
var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

const ProfileHome = () => {
  return (
    <HStack
      w='90%'
      justifyContent={'space-between'}
      mx={'auto'}
      mt={height * 0.12}
      borderRadius='md'
      padding={'4'}
      mb={height * 0.03}
    >
      <VStack>
        <Text fontSize={'3xl'} fontFamily={'Poppins'}>
          Hey
        </Text>
        <Text
          fontSize={'4xl'}
          fontWeight={'600'}
          lineHeight={'40'}
          fontFamily={'Poppins'}
        >
          Tessa !
        </Text>
        <Text fontSize={'md'} fontFamily={'Poppins'}>
          Caretaker{' '}
          <Text color={'neurocare.blue'} fontFamily={'Poppins'}>
            Freny
          </Text>
        </Text>
      </VStack>
      <Avatar
        size={height * 0.145}
        source={{
          uri: 'https://images.unsplash.com/photo-1552255147-82aa08ec13a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4ODI3MzYwfHxlbnwwfHx8fA%3D%3D&w=1000&q=80',
        }}
        ss
      ></Avatar>
    </HStack>
  );
};

export default ProfileHome;
