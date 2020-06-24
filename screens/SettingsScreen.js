// SettingsScreen.js
//
// Implements the settings screen
// This screen is intended to be used to control the
// settings for an individual vehicle.

import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { Ionicons } from '@expo/vector-icons';

function SettingsView() {
  return (
    <View>
    </View>
  );
}

const MyStack = createStackNavigator();
export default function SettingsScreen() {
  return (
    <MyStack.Navigator>
      <MyStack.Screen name="My Settings" component={SettingsView} />
    </MyStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
