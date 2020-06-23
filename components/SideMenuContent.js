// SideMenuContent.js
//
// Implements the content of the side menu

import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native';

import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

import AddVehicle from '../containers/AddVehicle';

const window = Dimensions.get('window');

export default function SideMenuContent(props) {
  const scheme = useColorScheme();

  return (
    <SafeAreaView theme={scheme === 'dark' ? DarkTheme : DefaultTheme} style={styles.container}>
      <AddVehicle />
      <View style={{borderBottomColor: 'black',borderBottomWidth: 1}} />
      <Text style={styles.menutext}>This is the side menu</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    width: (window.width * 2)/3,
    height: window.height
  },
  menutext: {
    flex: 1,
    backgroundColor: '#fafafa',
    textAlign: 'center',
  }
  });
