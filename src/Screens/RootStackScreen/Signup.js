import React, { useContext, useRef, useState } from 'react';
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
  Radio,
} from 'native-base';
import { Dimensions } from 'react-native';
import {
  AntDesign,
  Fontisto,
  Feather,
  MaterialIcons,
} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../Hooks/createContext';
import BottomSheet from 'reanimated-bottom-sheet';
import ModelHeader from '../../Components/Model/ModelHeader';
import { Choice } from './Index';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

const Signup = () => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    isPatient: true,
  });
  const [show, setShow] = useState(false);

  const navigation = useNavigation();
  const { signUp } = useContext(AuthContext);

  const handleEmail = (val) => {
    if (val.length !== 0) {
      setFormData({
        ...formData,
        email: val,
      });
    }
  };
  const handlePassword = (val) => {
    if (val.length !== 0) {
      setFormData({
        ...formData,
        password: val,
      });
    }
  };

  const patientClientHandler = (val) => {
    setFormData({
      ...formData,
      isPatient: val,
    });
  };

  const handleConfirmPassword = (val) => {
    if (val.length == formData.password) {
      console.warn('Password confirmed');
    } else console.warn('Password did not match');
  };

  const handleSignup = () => {
    signUp();
  };

  const handleLogin = () => {
    navigation.navigate('LogIn');
  };

  const handleEyeClick = () => setShow(!show);

  const renderContent = () => <Choice />;
  const renderHeader = () => <ModelHeader />;

  const sheetRef = useRef();

  return (
    <Center h={'full'}>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[height * 0.68, height * 0.42, 0]}
        initialSnap={2}
        borderRadius={24}
        renderContent={renderContent}
        renderHeader={renderHeader}
      />
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
          <Icon size='5' as={Fontisto} name='facebook' color='white' ml={'6'} />
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
        <Center my={'3'}>
          <Text fontSize='sm'>or Sign Up with email</Text>
        </Center>
        <VStack>
          <FormControl isRequired>
            <Input
              Input
              placeholder='Email'
              rounded={'xl'}
              size={'md'}
              px={'4'}
              py={height * 0.015}
              bg={'neurocare.orange2'}
              borderWidth={'0'}
              borderRadius={'12px'}
              onChangeText={(value) => handleEmail(value)}
              InputRightElement={
                <IconButton
                  rounded={'full'}
                  size='xs'
                  justifyContent={'center'}
                  w='1/6'
                  h='4'
                  icon={
                    <Icon
                      size='xs'
                      as={MaterialIcons}
                      name='done'
                      color='green.400'
                      alignSelf={'center'}
                    />
                  }
                  onPress={handleEyeClick}
                >
                  {show ? 'Hide' : 'Show'}
                </IconButton>
              }
              _focus={{
                backgroundColor: 'neurocare.orange2',
              }}
            />
          </FormControl>
          <FormControl isRequired>
            <Input
              rounded={'lg'}
              bg={'neurocare.orange2'}
              borderWidth={'0'}
              px={'4'}
              size={'md'}
              py={height * 0.015}
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
              onChangeText={(value) => handlePassword(value)}
            />
          </FormControl>
          <FormControl isRequired pt={2}>
            <Input
              rounded={'lg'}
              bg={'neurocare.orange2'}
              borderWidth={'0'}
              size={'md'}
              px={'4'}
              py={height * 0.015}
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
              onChangeText={(value) => handleConfirmPassword(value)}
            />
          </FormControl>
          {/* <Radio.Group
            isRequired
            name='myRadioGroup'
            accessibilityLabel='favorite number'
            onChange={(value) => patientClientHandler(value)}
          >
            <Radio value='true' my={1}>
              Patient
            </Radio>
            <Radio value='false' my={1}>
              Caretaker
            </Radio>
          </Radio.Group> */}

          <Button
            onPress={() => sheetRef.current.snapTo(0)}
            mt='5'
            py={height * 0.02}
            rounded={'full'}
            bg='neurocare.blue'
          >
            Sign Up
          </Button>
        </VStack>
        <Center
          position={'absolute'}
          bottom={height * -0.135}
          mx={'auto'}
          w={width * 0.8}
        >
          <Text fontSize={'md'} onPress={handleLogin}>
            Already have an account?
            <Text color={'neurocare.blue'} fontWeight={'bold'}>
              {' '}
              Log In
            </Text>
          </Text>
        </Center>
      </VStack>
    </Center>
  );
};

export default Signup;
