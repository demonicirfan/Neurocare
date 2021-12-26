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
import CareTakerHomeScreen from '../src/Screens/CaretakerScreens/HomeScreen.js';
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='CTHome' headerMode='none'>
        <Stack.Screen name='CTHome' component={CareTakerHomeScreen} />
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
