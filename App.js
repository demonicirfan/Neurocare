import React from 'react';
import {
  extendTheme,
  NativeBaseProvider,
  useBreakpointValue,
} from 'native-base';
import Navigation from './navigation/Index';
import {
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  useFonts,
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
useBreakpointValue;

const theme = extendTheme({
  styles: {
    global: {
      fontFamily: 'Poppins',
      body: {
        color: 'white',
      },
    },
  },
  colors: {
    neurocare: {
      orange1: '#FFFBF8',
      orange2: '#FFE6C9',
      orange3: '#FBBA00',
      blue: '#0063DA',
      green: '#A0C514',
    },
  },
  fontConfig: {
    Poppins: {
      100: {
        normal: `Poppins_100Thin`,
      },
      200: {
        normal: `Poppins_200ExtraLight`,
      },
      300: {
        normal: `Poppins_300Light`,
      },
      400: {
        normal: `Poppins_400Regular`,
      },
      500: {
        normal: `Poppins_500Medium`,
      },
      600: {
        normal: `Poppins_600SemiBold`,
      },
      700: {
        normal: `Poppins_700Bold`,
      },
      800: {
        normal: `Poppins_800ExtraBold`,
      },
    },
  },
  fonts: {
    Poppins: 'Poppins',
  },
});

const App = () => {
  let [fontLoaded, error] = useFonts({
    Poppins_100Thin,
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });

  if (!fontLoaded) {
    {
      return <AppLoading />;
    }
  }

  return (
    <NativeBaseProvider theme={theme}>
      <Navigation />
    </NativeBaseProvider>
  );
};

export default App;
