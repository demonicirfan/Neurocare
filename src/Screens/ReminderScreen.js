import {
  Text,
  HStack,
  VStack,
  Heading,
  Wrap,
  Pressable,
  Center,
} from 'native-base';
import React from 'react';
import ReminderWrapper from '../Components/Reminders/ReminderWrapper';
import { Entypo } from '@expo/vector-icons';
import BottomSheet from 'reanimated-bottom-sheet';
import AddReminder from '../Components/Reminders/AddReminder';

const ReminderScreen = () => {
  const renderContent = () => <AddReminder />;
  const renderHeader = () => (
    <Center
      w={'40px'}
      h={'4px'}
      bg={'gray.300'}
      position={'absolute'}
      left={'44%'}
      mt={'15px'}
      rounded={'full'}
    />
  );

  const sheetRef = React.useRef();

  return (
    <>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[480, 400, 0]}
        initialSnap={2}
        borderRadius={24}
        renderContent={renderContent}
        renderHeader={renderHeader}
      />
      <VStack mt={12} ml={'2'}>
        <HStack justifyContent={'space-between'} py={'4'}>
          <Heading fontSize={'3xl'}> Reminders</Heading>
          <Pressable
            mr={'4'}
            bg={'blue.600'}
            p={'1'}
            rounded={'full'}
            onPress={() => sheetRef.current.snapTo(0)}
          >
            <Entypo name='plus' size={24} color='white' />
          </Pressable>
        </HStack>

        <VStack space={'8'}>
          <VStack px={'4'} space={'4'}>
            <Text fontSize={'xl'}>Pinned</Text>
            <Wrap direction='row'>
              <ReminderWrapper
                title={'Coffee'}
                description={'Prepare hot coffee for friends'}
                timing={'Today, 4:30'}
                color={'blue.300'}
              />
              <ReminderWrapper
                title={'Coffee'}
                description={'Prepare hot coffee for friends'}
                timing={'Today, 4:30'}
                color={'orange.200'}
              />
            </Wrap>
          </VStack>
          <VStack px={'4'} space={'4'}>
            <Text fontSize={'xl'}>Upcomming</Text>
            <Wrap direction='row'>
              <ReminderWrapper
                title={'Coffee'}
                description={'Prepare hot coffee for friends'}
                timing={'Today, 4:30'}
                color={'orange.200'}
              />
              <ReminderWrapper
                title={'Coffee'}
                description={'Prepare hot coffee for friends '}
                timing={'Today, 4:30'}
                color={'green.300'}
              />
              <ReminderWrapper
                title={'Coffee'}
                description={'Prepare hot coffee for friends'}
                timing={'Today, 4:30'}
                color={'red.300'}
              />
              <ReminderWrapper
                title={'Coffee'}
                description={'Prepare hot coffee for friends'}
                timing={'Today, 4:30'}
                color={'blue.300'}
              />
            </Wrap>
          </VStack>
        </VStack>
      </VStack>
    </>
  );
};

export default ReminderScreen;
