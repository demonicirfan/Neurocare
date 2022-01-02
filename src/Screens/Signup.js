import React from 'react';
import {
  Text,
  Center,
  Button,
  Checkbox,
  VStack,
  HStack,
  IconButton,
  Icon,
  FormControl,
  Input,
  KeyboardAvoidingView,
} from 'native-base';
import { Dimensions } from 'react-native';
import {
  AntDesign,
  Fontisto,
  Feather,
  MaterialIcons,
} from '@expo/vector-icons';
import {} from '@expo/vector-icons';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

const Signup = () => {
  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [show, setShow] = React.useState(false);

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
    <KeyboardAvoidingView>
      <Center pt={height * 0.2}>
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
              py={'3'}
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
                Continue With Facebook
              </Text>
            </HStack>
            <HStack
              w={width * 0.8}
              rounded={'full'}
              bg={'transparent'}
              borderWidth={'0.2'}
              onPress={() => {
                console.log('login with facebook');
              }}
              alignItems={'center'}
              py={'3'}
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
                Continue With google
              </Text>
            </HStack>
          </VStack>
          <Center my={'3'}>
            <Text fontSize='sm'>or Sign Up with email</Text>
          </Center>
          <VStack>
            <FormControl isRequired isInvalid={'name' in errors}>
              <Input
                placeholder='Email'
                rounded={'xl'}
                fontSize={'sm'}
                bg={'neurocare.orange2'}
                borderWidth={'0'}
                borderRadius={'12px'}
                onChangeText={(value) => setData({ ...formData, name: value })}
                _focus={{
                  backgroundColor: 'transparent',
                  borderWidth: '0.5px',
                  borderColor: 'black',
                  borderRadius: '20px',
                }}
              />
              {'name' in errors ? (
                <FormControl.ErrorMessage
                  _text={{
                    fontSize: 'xs',
                    color: 'error.500',
                    fontWeight: 500,
                  }}
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
                borderWidth={'0'}
                borderRadius={'12px'}
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
            </FormControl>
            <FormControl isRequired isInvalid={'name' in errors} pt={2}>
              <Input
                rounded={'lg'}
                bg={'neurocare.orange2'}
                borderWidth={'0'}
                borderRadius={'12px'}
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
                placeholder='Confirm Password'
              />
            </FormControl>
            <Button
              onPress={onSubmit}
              mt='5'
              py='3'
              rounded={'full'}
              bg='neurocare.blue'
            >
              Sign Up
            </Button>
          </VStack>
          <Center
            position={'absolute'}
            bottom={height * -0.1}
            mx={'auto'}
            w={width * 0.8}
          >
            <Text fontSize={'md'}>
              Already have an account?
              <Text color={'neurocare.blue'} fontWeight={'bold'}>
                {' '}
                Log In
              </Text>
            </Text>
          </Center>
        </VStack>
      </Center>
    </KeyboardAvoidingView>
  );
};

export default Signup;
