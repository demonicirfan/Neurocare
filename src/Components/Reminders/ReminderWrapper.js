import { Center, Heading, VStack, Text } from 'native-base';
import React from 'react';

const ReminderWrapper = (props) => {
  return (
    <VStack
      space='3'
      alignItems='flex-start'
      bg={'white'}
      p={'4'}
      w={'32'}
      rounded={'xl'}
      m={'1'}
      style={{
        shadowColor: 'gray',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.3,
        elevation: 14,
      }}
    >
      <Heading fontSize={'xl'}>{props.title}</Heading>
      <Text fontSize='xs'>{props.description}</Text>
      <Center
        bg={props.color}
        px={'15px'}
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
