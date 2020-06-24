// SideMenuContent.js
//
// Implements the content of the side menu

import * as React from 'react';
import { ScrollView, StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native';
import { Divider } from 'react-native-elements';
import { DrawerContentScrollView } from '@react-navigation/drawer';

import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

export default function SideMenu(props) {
  const scheme = useColorScheme();

  return (
    <DrawerContentScrollView
      theme={scheme === 'dark' ? DarkTheme : DefaultTheme}
      {...props}>
      <Text style={styles.menutext}>This is the side menu</Text>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menutext: {
    flex: 1,
    backgroundColor: '#fafafa',
    textAlign: 'center',
  }
  });
