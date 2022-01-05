import React, { useMemo, useReducer, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  HomeScreen,
  ReminderScreen,
  WellnessScreen,
  ContactDetail,
  ProfilePage,
  DiagnosisHome,
  Info,
} from '../src/Screens/PatientScreens/Index';
// import { CaretakerHome } from '../src/Screens/CaretakerScreens';
import {
  SplashScreen,
  LogInScreen,
  SignUpScreen,
} from '../src/Screens/RootStackScreen/Index';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthContext } from '../src/Hooks/createContext';

const Stack = createStackNavigator();
const Navigation = () => {
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(
    () => ({
      signIn: async (userName, password) => {
        let userToken;
        userToken = null;
        if (userName == 'user' && password == 'pass') {
          try {
            userToken = 'dfgdfg';
            await AsyncStorage.setItem('userToken', userToken);
          } catch (e) {
            console.log(e);
          }
        }
        console.log('user token: ', userToken);
        dispatch({ type: 'LOGIN', id: userName, token: userToken });
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('userToken');
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: 'LOGOUT' });
      },
      signUp: () => {},
    }),
    []
  );

  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      console.log('user token: ', userToken);
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return <SplashScreen />;
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
          <Stack.Navigator initialRouteName='PatientHome' headerMode='none'>
            <Stack.Screen name='PatientHome' component={HomeScreen} />
            <Stack.Screen name='Info' component={Info} />
            <Stack.Screen name='Diagnosis' component={DiagnosisHome} />
            <Stack.Screen name='Reminders' component={ReminderScreen} />
            <Stack.Screen name='Wellness' component={WellnessScreen} />
            <Stack.Screen name='Detail' component={ContactDetail} />
            <Stack.Screen name='Profile' component={ProfilePage} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator initialRouteName='SplashScreen' headerMode='none'>
            <Stack.Screen name='LogIn' component={LogInScreen} />
            <Stack.Screen name='SignUp' component={SignUpScreen} />
          </Stack.Navigator>
        )}

        {/* <Stack.Navigator initialRouteName='CaretakerHome' headerMode='none'>
           <Stack.Screen name='CaretakerHome' component={CaretakerHome} />
         </Stack.Navigator> */}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
export default Navigation;
