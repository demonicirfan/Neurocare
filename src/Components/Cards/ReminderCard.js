import { useNavigation } from '@react-navigation/native';
import { VStack, Text } from 'native-base';
import React from 'react';
import { Image, Pressable } from 'react-native';

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
        shadow={'6'}
        borderRadius={'xl'}
        p={5}
      >
        <Image
          source={require('./Reminder.png')}
          style={{ width: 72, height: 72, margin: 6 }}
        />
        <Text fontSize={'xl'} fontWeight={'700'}>
          Reminder
        </Text>
      </VStack>
    </Pressable>
  );
};

export default ReminderCard;
