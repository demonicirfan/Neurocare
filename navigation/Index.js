import React from 'react';
import HomeScreen from '../src/Screens/HomeScreen';
import DiagnosisHome from '../src/Screens/DiagnosisHome';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

const Stack = createSharedElementStackNavigator();
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' headerMode='none'>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          sharedElementsConfig={() => {
            return [{ id: `stillSharedElement`, animation: 'fade' }];
          }}
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
        <Stack.Screen name='Diagnosis' component={DiagnosisHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
