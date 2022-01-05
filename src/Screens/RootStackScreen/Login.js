import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Text,
  Center,
  Button,
  VStack,
  HStack,
  IconButton,
  Icon,
  FormControl,
  Input,
  Modal,
  Link,
} from 'native-base';
import { Dimensions, Image } from 'react-native';
import { AntDesign, Fontisto, Feather } from '@expo/vector-icons';

import { AuthContext } from '../../Hooks/createContext';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { signIn } = useContext(AuthContext);
  const navigation = useNavigation();

  const handleEmail = (val) => {
    if (val.length !== 0) {
      setFormData({
        ...data,
        email: val,
      });
    }
  };

  const handlePassword = (val) => {
    if (val.length !== 0) {
      setFormData({
        ...data,
        password: val,
      });
    }
  };

  const handleLogin = (email, password) => {
    signIn(email, password);
  };

  const handleSignup = () => {
    navigation.navigate('SignUpScreen');
  };

  const handleContinue = () => {
    console.warn('continue');
  };

  const handleEyeClick = () => setShow(!show);

  return (
    <Center h={'full'}>
      <VStack space='5'>
        <VStack space='5'>
          <HStack
            w={width * 0.8}
            rounded={'full'}
            bg={'blue.500'}
            onPress={() => {
              console.log('login with facebook');
            }}
            alignItems={'center'}
            py={height * 0.023}
            space={'2'}
          >
            <Icon
              size='5'
              as={Fontisto}
              name='facebook'
              color='white'
              ml={'6'}
            />
            <Text color={'white'} mx={'auto'} pr={'8'}>
              Login With Facebook
            </Text>
          </HStack>
          <HStack
            w={width * 0.8}
            rounded={'full'}
            bg={'transparent'}
            borderWidth={'0.5'}
            onPress={() => {
              console.log('login with facebook');
            }}
            alignItems={'center'}
            py={height * 0.023}
            space={'2'}
          >
            <Icon
              size='5'
              as={AntDesign}
              name='google'
              color='gray.900'
              ml={'6'}
            />
            <Text color={'gray.900'} mx={'auto'} pr={'8'}>
              Login With google
            </Text>
          </HStack>
        </VStack>
        <Center my={'3'}>
          <Text fontSize='sm'>or login with email</Text>
        </Center>
        <VStack space={'1'}>
          <FormControl isRequired>
            <Input
              placeholder='Email'
              rounded={'xl'}
              size={'md'}
              px={'4'}
              py={height * 0.015}
              bg={'neurocare.orange2'}
              borderWidth={'0'}
              onChangeText={(value) => handleEmail(value)}
            />
          </FormControl>
          <FormControl isRequired>
            <Input
              rounded={'lg'}
              bg={'neurocare.orange2'}
              size={'md'}
              px={'4'}
              py={height * 0.015}
              borderWidth={'0'}
              borderRadius={'xl'}
              type={show ? 'text' : 'password'}
              InputRightElement={
                <IconButton
                  rounded={'full'}
                  size='xs'
                  justifyContent={'center'}
                  w='1/6'
                  h='4'
                  icon={
                    show ? (
                      <Icon
                        size='xs'
                        as={Feather}
                        name='eye'
                        color='gray.300'
                        alignSelf={'center'}
                      />
                    ) : (
                      <Icon
                        size='xs'
                        as={Feather}
                        name='eye-off'
                        color='gray.300'
                        alignSelf={'center'}
                      />
                    )
                  }
                  onPress={handleEyeClick}
                >
                  {show ? 'Hide' : 'Show'}
                </IconButton>
              }
              placeholder='Password'
              onChangeText={(value) => handlePassword(value)}
            />
          </FormControl>
          <Button
            onPress={handleLogin(formData.email, formData.password)}
            mt='5'
            py={height * 0.02}
            rounded={'full'}
            bg='neurocare.blue'
          >
            Log in
          </Button>
        </VStack>
        <Center>
          <Link fontSize={'sm'} onPress={() => setShowModal(true)}>
            Forgot Password?
          </Link>
          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content
              bg={'white'}
              w={width * 0.8}
              px={'4'}
              alignContent={'center'}
            >
              <Modal.Body bg={'white'}>
                <VStack space='3' alignItems={'center'}>
                  <Center>
                    <Image
                      source={require('./forgot.png')}
                      style={{
                        width: width * 0.4,
                        height: width * 0.22,
                        margin: 6,
                      }}
                    />
                  </Center>
                  <Text textAlign={'center'} fontSize={'lg'}>
                    Forgot Your Password?
                  </Text>
                  <Text textAlign={'center'} fontSize={'xs'} mb={'6'}>
                    Enter your email and we will send you instructions to reset
                    your password.
                  </Text>
                </VStack>

                <FormControl>
                  <Input
                    placeholder='@'
                    rounded={'full'}
                    px='6'
                    fontSize={'md'}
                    bg={'neurocare.orange2'}
                    borderWidth={'0'}
                  />
                </FormControl>
              </Modal.Body>
              <Modal.Footer pt={'0'} alignItems={'center'} bg={'white'}>
                <VStack space={2} alignItems={'center'} w={'full'}>
                  <Button
                    onPress={handleContinue}
                    mt='2'
                    py='3'
                    w={'full'}
                    rounded={'full'}
                    bg='neurocare.blue'
                    fontSize={'md'}
                  >
                    Continue
                  </Button>
                  <Link
                    w={'full'}
                    py='3'
                    textColor={'blue.900'}
                    onPress={() => {
                      setShowModal(false);
                    }}
                  >
                    <Center mx='auto' color='neurocare.blue'>
                      Back to My App
                    </Center>
                  </Link>
                </VStack>
              </Modal.Footer>
            </Modal.Content>{' '}
          </Modal>
        </Center>
        <Center
          position={'absolute'}
          bottom={height * -0.13}
          mx={'auto'}
          w={width * 0.8}
        >
          <Text fontSize={'md'}>
            Do not have an acount?
            <Text
              onPress={handleSignup}
              color={'neurocare.blue'}
              fontWeight={'bold'}
            >
              {' '}
              Sign Up
            </Text>
          </Text>
        </Center>
      </VStack>
    </Center>
  );
};

export default Login;
