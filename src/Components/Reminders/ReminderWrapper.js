import { Center, Heading, VStack, Text } from 'native-base';
import React from 'react';

import { Dimensions } from 'react-native';
var width = Dimensions.get('window').width;

const ReminderWrapper = (props) => {
  return (
    <VStack
      space='3'
      alignItems='flex-start'
      bg={'white'}
      p={'4'}
      w={width * 0.4}
      rounded={'xl'}
      m={'1'}
      style={{
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        elevation: 14,
      }}
    >
      <Text fontSize={'xl'} fontFamily={'Poppins'}>
        {props.title}
      </Text>
      <Text fontSize='xs' fontFamily={'Poppins'} fontWeight={'300'}>
        {props.description}
      </Text>
      <Center
        bg={props.color}
        px={width * 0.042}
        py={'5px'}
        rounded={'full'}
        style={{
          shadowColor: 'gray',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 2,
          elevation: 8,
        }}
      >
        <Text>{props.timing}</Text>
      </Center>
    </VStack>
  );
};

export default ReminderWrapper;
