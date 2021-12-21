import { Pressable, Text } from 'native-base';
import React from 'react';
import { Dimensions } from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const LogoutButton = () => {
  return (
    <Pressable
      bg={'blue.500'}
      w={width * 0.7}
      mx={'auto'}
      rounded={'full'}
      alignItems={'center'}
      h={height * 0.07}
      mt={height * 0.12}
      onPress={() => {
        console.warn('logout pressed');
      }}
    >
      <Text m={'auto'} fontSize={'2xl'} color={'white'} fontFamily={'Poppins'}>
        Logout
      </Text>
    </Pressable>
  );
};

export default LogoutButton;
