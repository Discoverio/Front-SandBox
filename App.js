import React from 'react';
import {Text, View } from 'react-native';
import s from './assets/styles/globalStyles';

import HeaderApp from './parts/HeaderApp';

import FlatButton from './components/interactives/button';
import IconButton from './components/interactives/icons_button';

import MyCheckbox from './components/interactives/checkbox';
import MyLovebox from './components/interactives/lovebox';
import MyPlusbox from './components/interactives/plusbox';

import MyStarbox from './components/interactives/starbox';

import Card from './components/interactives/card';

import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './components/interactives/AppNavigator' 



export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}