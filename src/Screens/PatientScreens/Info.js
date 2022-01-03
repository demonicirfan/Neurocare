import { useNavigation } from '@react-navigation/native';
import {
  VStack,
  Text,
  Container,
  HStack,
  Avatar,
  AvatarBadge,
  Icon,
  Center,
  IconButton,
  FormControl,
  Input,
  Button,
  ScrollView,
  KeyboardAvoidingView,
} from 'native-base';
import React from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const checkForCameraRollPermission = async () => {
  const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
  if (status !== 'granted') {
    alert("Please grant camera roll permissions inside your system's settings");
  } else {
    console.log('Media Permissions are granted');
  }
};

const addImage = async () => {
  let _image = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [1, 1],
    quality: 1,
  });

  console.log(JSON.stringify(_image));

  if (!_image.cancelled) {
    setImage(_image.uri);
  }
};

const PatientInfo = () => {
  const navigation = useNavigation();
  const onPressSave = () => {
    navigation.navigate('Home');
  };
  const onPressSkip = () => {
    navigation.navigate('Home');
  };
  //   React.useEffect(() => {
  //     checkForCameraRollPermission();
  //   }, []);
  return (
    <ScrollView
      h={'full'}
      bg={'neurocare.orange1'}
      showsVerticalScrollIndicator={false}
    >
      <VStack h={'full'} bg={'neurocare.orange1'}>
        <VStack mt={height * 0.088} ml={'8'}>
          <Text fontSize={'4xl'} fontWeight={'600'}>
            Info
          </Text>
          <Text fontSize={'md'}>Add Your Details </Text>
        </VStack>
        <VStack>
          <VStack my={'8'}>
            <Center>
              <Avatar
                size={width / 3}
                bg='purple.400'
                source={{
                  uri: 'https://res.cloudinary.com/practicaldev/image/fetch/s--H3ReeQOb--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9ivc0k6p93ace33vvka0.png',
                }}
              >
                NB
              </Avatar>
              <Center
                backgroundColor={'neurocare.orange3'}
                rounded={'full'}
                position={'absolute'}
                bottom={'0'}
                right={width / 3}
                p={'1'}
                borderWidth={'1px'}
                borderColor={'white'}
              >
                <TouchableOpacity onPress={addImage}>
                  <Icon
                    as={MaterialIcons}
                    name='mode-edit'
                    size={'xs'}
                    color='white'
                  />
                </TouchableOpacity>
              </Center>
            </Center>
            {/* <Center my={'4'}>
                <Text fontSize={'xl'} fontWeight={'600'}>
                  Full Name
                </Text>
              </Center> */}
            <VStack space={'2'} w={width * 0.8} mx={'auto'} mt={'8'}>
              <FormControl>
                <FormControl.Label>
                  <Text fontSize={'md'} fontWeight={'600'} pl={'1'}>
                    Full name
                  </Text>
                </FormControl.Label>
                <Input
                  type='text'
                  placeholder='name'
                  rounded={'xl'}
                  size={'md'}
                  px={'4'}
                  py={height * 0.015}
                  borderWidth='0.8px'
                  borderColor={'gray.300'}
                  _focus={{
                    borderColor: 'neurocare.green',
                  }}
                  // onChangeText={(value) => setData({ ...formData, name: value })}
                />
              </FormControl>
              <FormControl>
                <FormControl.Label>
                  <Text fontSize={'md'} fontWeight={'600'} pl={'1'}>
                    Email
                  </Text>
                </FormControl.Label>
                <Input
                  type='email'
                  placeholder='@'
                  rounded={'xl'}
                  size={'md'}
                  px={'4'}
                  py={height * 0.015}
                  borderWidth='0.8px'
                  borderColor={'gray.300'}
                  _focus={{
                    borderColor: 'neurocare.green',
                  }}
                  // onChangeText={(value) => setData({ ...formData, name: value })}
                />
              </FormControl>
              <FormControl>
                <FormControl.Label>
                  <Text fontSize={'md'} fontWeight={'600'} pl={'1'}>
                    Date of Birth
                  </Text>
                </FormControl.Label>
                <Input
                  type='number'
                  placeholder='00/00/00'
                  rounded={'xl'}
                  size={'md'}
                  px={'4'}
                  py={height * 0.015}
                  borderWidth='0.8px'
                  borderColor={'gray.300'}
                  _focus={{
                    borderColor: 'neurocare.green',
                  }}
                  // onChangeText={(value) => setData({ ...formData, name: value })}
                />
              </FormControl>
              <Button
                onPress={onPressSave}
                mt='5'
                py={height * 0.02}
                rounded={'full'}
                bg='neurocare.blue'
              >
                Save
              </Button>
              <Button
                onPress={onPressSkip}
                mt='1'
                py={height * 0.02}
                rounded={'full'}
                variant={'ghost'}
                fontSize={'lg'}
                color={'blue.900'}
              >
                Skip
              </Button>
            </VStack>
          </VStack>
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default PatientInfo;
