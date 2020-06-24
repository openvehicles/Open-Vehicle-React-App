// VehicleScreen.js
//
// Implements the vehicle screen
// This is a WebView, with the content dynamically loaded,
// to allow the greatest flexibility in display customisation.

import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { Ionicons } from '@expo/vector-icons';

import * as WebBrowser from 'expo-web-browser';
import { WebView } from 'react-native-webview';
import MenuIcon from '../components/MenuIcon';
import ConnectionIcon from '../components/ConnectionIcon';

function VehicleView() {
  return (
    <WebView
      scalesPageToFit={false}
      bounces={false}
      scrollEnabled={false}
      showsHorizontalScrollIndicator={false}
      source={{ uri: 'https://www.openvehicles.com/sites/default/files/pictures/picture-106577-1552925731.jpg' }}
    />
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
