// VehicleScreen.js
//
// Implements the vehicle screen
// This is a WebView, with the content dynamically loaded,
// to allow the greatest flexibility in display customisation.

import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

import MenuIcon from '../components/MenuIcon';
import ConnectionIcon from '../components/ConnectionIcon';

function VehicleView() {
  const scheme = useColorScheme();
  const { colors } = useTheme();

  return (
    <View
      theme={scheme === 'dark' ? DarkTheme : DefaultTheme}
      style={styles.container} >
      <Text style={{ color: colors.text }}>Vehicle Location not currently supported on Web</Text>
    </View>
  );
}

const MyStack = createStackNavigator();
export default function MessagingScreen() {
  return (
    <MyStack.Navigator>
      <MyStack.Screen
        name="My Vehicle"
        component={VehicleView}
        options={{
          headerLeft: () => <MenuIcon/>,
          headerRight: () => <ConnectionIcon/>
        }} />
    </MyStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
