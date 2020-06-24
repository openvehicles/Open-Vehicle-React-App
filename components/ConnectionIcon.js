// TabBarIcon.js
//
// A component to provide icons for the tab bar

import * as React from 'react';

import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

export default function ConnectionIcon(props) {
  return (
    <Ionicons
      name='md-wifi'
      size={30}
      color='white'
      style={{ marginRight: 3 }}
    />
  );
}
