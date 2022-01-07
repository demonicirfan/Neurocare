import { useNavigation } from '@react-navigation/native';
import { Pressable, Text } from 'native-base';
import React from 'react';
import { Dimensions } from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const EditButton = () => {
  const navigation = useNavigation();
  const editPressed = () => {
    navigation.navigate('Info');
  };
  return (
    <Pressable
      bg={'yellow.500'}
      w={width * 0.26}
      h={height * 0.055}
      ml={'8%'}
      mr={'80%'}
      rounded={'full'}
      alignItems={'center'}
      onPress={editPressed}
    >
      <Text m={'auto'} fontSize={'2xl'} color={'white'} fontFamily={'Poppins'}>
        Edit
      </Text>
    </Pressable>
  );
};

export default EditButton;
