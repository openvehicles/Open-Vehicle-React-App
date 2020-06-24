// TabBarIcon.js
//
// A component to provide icons for the tab bar

import * as React from 'react';

import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { useNavigation, useTheme } from '@react-navigation/native';

export default function MenuIcon(props) {
  const navigation = useNavigation();
  const { colors } = useTheme();

  return (
    <Ionicons
      name='md-menu'
      size={30}
      style={{ marginLeft: 3, color: colors.text }}
      onPress={() => navigation.toggleDrawer()}
    />
  );
}
