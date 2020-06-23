// LoadingView.js
//
// Implements the 'loading' View

import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native';

import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

const window = Dimensions.get('window');

export default function LoadingView(props) {
  const scheme = useColorScheme();

  return (
    <Text>Loading...</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    width: (window.width * 2)/3,
    height: window.height
  }
  });
