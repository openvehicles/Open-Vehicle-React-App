// TabBarIcon.js
//
// A component to provide icons for the tab bar

import * as React from 'react';

import { useTheme } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function ConnectionIcon(props) {
  const { colors } = useTheme();

  return (
    <Ionicons
      name='md-wifi'
      size={30}
      color='white'
      style={{ marginRight: 3, color: colors.text }}
    />
  );
}
