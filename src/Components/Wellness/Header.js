import React from 'react';
import { HStack, Text, Icon, IconButton } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = (props) => {
  const navigation = useNavigation();
  return (
    <HStack
      space='3'
      alignItems='center'
      justifyContent='space-between'
      width={'100%'}
      px={'4'}
    >
      <Text fontSize='2xl' fontWeight={'600'}>
        {props.title}
      </Text>
      <IconButton
        variant='solid'
        style={{ transform: [{ rotate: '45deg' }] }}
        bg={'gray.400'}
        rounded={'full'}
        icon={<Icon size='sm' as={AntDesign} name='plus' color={'black'} />}
        onPress={() => {
          navigation.goBack();
        }}
      />
    </HStack>
  );
};

export default Header;
