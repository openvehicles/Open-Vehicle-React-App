// TabBarIcon.js
//
// A component to provide icons for the tab bar

import * as React from 'react';

import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { useNavigation } from '@react-navigation/native';

export default function MenuIcon(props) {
  const navigation = useNavigation();

  return (
    <Ionicons
      name='md-menu'
      size={30}
      color='white'
      style={{ marginLeft: 3 }}
      onPress={() => navigation.toggleDrawer()}
    />
  );
}
