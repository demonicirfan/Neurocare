import React, { useState } from 'react';
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

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;
import ForgotImage from './forgot.png';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [formData, setData] = useState({});
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navigation = useNavigation();
  const onPressSignup = () => {
    navigation.navigate('Signup');
  };

  const handleEyeClick = () => setShow(!show);

  const validate = () => {
    if (formData.name === undefined) {
      setErrors({
        ...errors,
        name: 'Name is required',
      });
      return false;
    } else if (formData.name.length < 3) {
      setErrors({
        ...errors,
        name: 'Name is too short',
      });
      return false;
    }
    return true;
  };

  const onSubmit = () => {
    validate() ? console.log('Submitted') : console.log('Validation Failed');
  };

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
          <FormControl isRequired isInvalid={'name' in errors}>
            <Input
              placeholder='Email'
              rounded={'xl'}
              size={'md'}
              px={'4'}
              py={height * 0.015}
              bg={'neurocare.orange2'}
              borderWidth={'0'}
              onChangeText={(value) => setData({ ...formData, name: value })}
            />
            {'name' in errors ? (
              <FormControl.ErrorMessage
                pl={'4'}
                _text={{ fontSize: 'xs', color: 'error.500', fontWeight: 500 }}
              >
                Error
              </FormControl.ErrorMessage>
            ) : (
              <FormControl.HelperText
                _text={{ fontSize: 'xs' }}
              ></FormControl.HelperText>
            )}
          </FormControl>
          <FormControl isRequired isInvalid={'name' in errors}>
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
            />
            {'name' in errors ? (
              <FormControl.ErrorMessage
                pl={'4'}
                _text={{ fontSize: 'sm', color: 'error.500', fontWeight: 400 }}
              >
                Incorrect Password
              </FormControl.ErrorMessage>
            ) : (
              <FormControl.HelperText
                _text={{ fontSize: 'xs' }}
              ></FormControl.HelperText>
            )}
          </FormControl>
          <Button
            onPress={onSubmit}
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
                    py={height * 0.015}
                    fontSize={'md'}
                    bg={'neurocare.orange2'}
                    borderWidth={'0'}
                  />
                </FormControl>
              </Modal.Body>
              <Modal.Footer pt={'0'} alignItems={'center'} bg={'white'}>
                <VStack space={2} alignItems={'center'} w={'full'}>
                  <Button
                    onPress={onSubmit}
                    mt='2'
                    py={height * 0.02}
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
              onPress={onPressSignup}
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
