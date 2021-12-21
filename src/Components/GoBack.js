import React from 'react';
import { IconButton, Icon } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const GoBack = () => {
  const navigation = useNavigation();
  return (
    <IconButton
      size={'sm'}
      style={{ transform: [{ rotate: '45deg' }] }}
      bg={'gray.300'}
      rounded={'full'}
      icon={<Icon size='sm' as={AntDesign} name='plus' color={'gray'} />}
      onPress={() => {
        navigation.goBack();
      }}
      _pressed={{
        backgroundColor: 'black',
      }}
      opacity={'0.6'}
    />
  );
};

export default GoBack;
