import {
  Text,
  HStack,
  VStack,
  Heading,
  Wrap,
  Pressable,
  Button,
  ScrollView,
} from 'native-base';
import React from 'react';
import ReminderWrapper from '../Components/Reminders/ReminderWrapper';
import { Entypo } from '@expo/vector-icons';
import BottomSheet from 'reanimated-bottom-sheet';
import AddReminder from '../Components/Reminders/AddReminder';
import { Dimensions } from 'react-native';
import ModelHeader from '../Components/Model/ModelHeader';
import { useNavigation } from '@react-navigation/native';
import GoBack from '../Components/GoBack';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

const ReminderScreen = () => {
  const navigation = useNavigation();
  const renderContent = () => <AddReminder />;
  const renderHeader = () => <ModelHeader />;

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

      <VStack
        pt={width * 0.18}
        px={width * 0.02}
        bg={'neurocare.orange1'}
        h={'full'}
      >
        <HStack justifyContent={'space-between'} py={'4'}>
          <Heading fontSize={'3xl'}> Reminders</Heading>
          <HStack space={'3'}>
            <Button
              bg={'neurocare.blue'}
              rounded={'full'}
              px={'6'}
              onPress={() => sheetRef.current.snapTo(0)}
            >
              Add
            </Button>
            <GoBack />
          </HStack>
        </HStack>
        <ScrollView showsVerticalScrollIndicator={false} h={'full'}>
          <VStack space={'8'}>
            <VStack mx={'auto'} space={'4'} maxW={width * 0.85}>
              <Text fontSize={'xl'} fontFamily={'Poppins'}>
                Pinned
              </Text>
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
            <VStack mx={'auto'} space={'4'} maxW={width * 0.85} mb={'8'}>
              <Text fontSize={'xl'} fontFamily={'Poppins'}>
                Pinned
              </Text>

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
                  color={'blue.300'}
                />
              </Wrap>
            </VStack>
          </VStack>
        </ScrollView>
      </VStack>
    </>
  );
};

export default ReminderScreen;
