import React from 'react';
import HomeScreen from '../src/Screens/HomeScreen';
import DiagnosisHome from '../src/Screens/DiagnosisHome';
import { NavigationContainer } from '@react-navigation/native';
import ReminderScreen from '../src/Screens/ReminderScreen';
import WellnessScreen from '../src/Screens/WellnessScreen';
import { createStackNavigator } from '@react-navigation/stack';
import ContactDetail from '../src/Components/Wellness/ContactDetail';
import ProfileScreen from '../src/Screens/ProfilePage.js';
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
        <Stack.Screen name='Profile' component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
