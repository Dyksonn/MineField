import 'react-native-gesture-handler';
import React from 'react'
import { AppLoading } from 'expo'

import { OpenSans_300Light, OpenSans_400Regular } from '@expo-google-fonts/open-sans'
import { Roboto_400Regular, Roboto_300Light_Italic, useFonts } from '@expo-google-fonts/roboto'

import Routes from './src/routes'

export default function App(){
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular, OpenSans_300Light,
    Roboto_400Regular, Roboto_300Light_Italic
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return <Routes />
}