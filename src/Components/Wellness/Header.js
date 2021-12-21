import React from 'react';
import { HStack, Text, Icon, IconButton, VStack } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import GoBack from '../GoBack';

const Header = (props) => {
  const navigation = useNavigation();
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
        <Text fontSize='2xl' fontWeight={'600'}>
          {props.title}
        </Text>
        <Text color={'blue.500'}>{props.phoneNumber}</Text>
      </VStack>
      <GoBack />
    </HStack>
  );
};

export default Header;
