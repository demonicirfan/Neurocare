import React, { useState } from 'react';
import {
  VStack,
  Button,
  FormControl,
  Input,
  Pressable,
  Text,
  HStack,
  Icon,
} from 'native-base';
import { View, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { AntDesign } from '@expo/vector-icons';

const AddReminder = () => {
  const [formData, setData] = useState({});
  const [errors, setErrors] = useState({});
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [dateText, setDateText] = useState('dd/mm/yy');
  const [timeText, setTimeText] = useState('00:00');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);

    let fDate =
      tempDate.getDate() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getFullYear();
    let fTime = tempDate.getHours() + ':' + tempDate.getMinutes();

    setDateText(fDate);
    setTimeText(fTime);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

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
    <VStack
      bg={'#EBEBEB'}
      borderColor={'white'}
      borderWidth={'4px'}
      borderRadius={'28'}
      w={'100%'}
      alignItems={'center'}
      space={'20'}
      pt={'12'}
    >
      <VStack width='90%' mx='4' h={'100%'}>
        <FormControl isRequired isInvalid={'name' in errors}>
          <FormControl.Label _text={{ bold: true }}>
            What is the reminder?
          </FormControl.Label>
          <Input
            placeholder=' Reminder'
            onChangeText={(value) => setData({ ...formData, name: value })}
            borderRadius={'xl'}
            bg={'white'}
          />
          {'name' in errors ? (
            <FormControl.ErrorMessage
              _text={{ fontSize: 'xs', color: 'error.500', fontWeight: 500 }}
            >
              Too Short
            </FormControl.ErrorMessage>
          ) : (
            <FormControl.HelperText
              _text={{ fontSize: 'xs' }}
            ></FormControl.HelperText>
          )}
        </FormControl>
        <FormControl>
          <FormControl.Label _text={{ bold: true }}>Details</FormControl.Label>
          <Input
            placeholder='  Detail'
            onChangeText={(value) => setData({ ...formData, name: value })}
            borderRadius={'xl'}
            bg={'white'}
          />
        </FormControl>
        <Text my='4' fontWeight={'bold'} fontSize={'md'}>
          Time
        </Text>
        <HStack space={'8'} mx={'4'}>
          <Button
            rightIcon={
              <Pressable onPress={showDatepicker}>
                <Icon
                  as={AntDesign}
                  name='caretdown'
                  color={'gray.300'}
                  size={5}
                />
              </Pressable>
            }
            title='Show date picker!'
            h={'40px'}
            bg={'white'}
            rounded={'md'}
            w={'50%'}
            disabled
          >
            {dateText}
          </Button>

          <Button
            rightIcon={
              <Pressable onPress={showTimepicker}>
                <Icon
                  as={AntDesign}
                  name='caretdown'
                  color={'gray.300'}
                  size={5}
                />
              </Pressable>
            }
            disabled
            h={'40px'}
            bg={'white'}
            rounded={'md'}
          >
            {timeText}
          </Button>

          {show && (
            <DateTimePicker
              value={date}
              mode={mode}
              is24Hour={true}
              display='default'
              onChange={onChange}
            />
          )}
        </HStack>
        <Button
          onPress={onSubmit}
          mt='5'
          colorScheme='cyan'
          rounded={'xl'}
          py={'4'}
        >
          Save
        </Button>
        <Pressable py={'4'} alignItems={'center'}>
          <Text>No Thanks</Text>
        </Pressable>
      </VStack>
    </VStack>
  );
};
export default AddReminder;
