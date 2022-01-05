import { Pressable, Text } from 'native-base';
import React, { useContext } from 'react';
import { Dimensions } from 'react-native';
import { AuthContext } from '../../../Hooks/createContext';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const LogoutButton = () => {
  const { signOut } = useContext(AuthContext);
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
        signOut();
      }}
    >
      <Text m={'auto'} fontSize={'2xl'} color={'white'} fontFamily={'Poppins'}>
        Logout
      </Text>
    </Pressable>
  );
};

export default LogoutButton;
