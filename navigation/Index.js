import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  HomeScreen,
  ReminderScreen,
  WellnessScreen,
  ContactDetail,
  ProfilePage,
  DiagnosisHome,
} from '../src/Screens/PatientScreens/Index';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' headerMode='none'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Diagnosis' component={DiagnosisHome} />
        <Stack.Screen name='Reminders' component={ReminderScreen} />
        <Stack.Screen name='Wellness' component={WellnessScreen} />
        <Stack.Screen name='Detail' component={ContactDetail} />
        <Stack.Screen name='Profile' component={ProfilePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
