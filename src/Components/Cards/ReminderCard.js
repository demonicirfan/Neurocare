import { useNavigation } from '@react-navigation/native';
import { VStack, Text } from 'native-base';
import React from 'react';
import { Image, Pressable } from 'react-native';

import { Dimensions } from 'react-native';
var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

const ReminderCard = () => {
  const navigation = useNavigation();
  const onPressProfileCard = () => {
    navigation.navigate('Reminders');
  };
  return (
    <Pressable onPress={onPressProfileCard}>
      <VStack
        space='3'
        alignItems='center'
        bg={'white'}
        borderRadius={'xl'}
        px={width * 0.07}
        py={3}
        style={{
          shadowColor: 'gray',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          elevation: 6,
        }}
      >
        <Image
          source={require('./Reminder.png')}
          style={{ width: width * 0.23, height: width * 0.23, margin: 6 }}
        />
        <Text fontSize={'xl'} fontWeight={'500'} fontFamily={'Poppins'}>
          Reminder
        </Text>
      </VStack>
    </Pressable>
  );
};

export default ReminderCard;
