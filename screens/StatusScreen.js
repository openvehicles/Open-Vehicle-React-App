// StatusScreen.js
//
// Implements the status screen
// This is a WebView, with the content dynamically loaded,
// to allow the greatest flexibility in display customisation.

import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import * as WebBrowser from 'expo-web-browser';
import { WebView } from 'react-native-webview';
import MenuIcon from '../components/MenuIcon';
import ConnectionIcon from '../components/ConnectionIcon';

function StatusView() {
  return (
    <WebView
      scalesPageToFit={false}
      bounces={false}
      scrollEnabled={false}
      showsHorizontalScrollIndicator={false}
      originWhitelist={['*']}
      style={{ marginTop: 20 }}
      source={{ uri: 'https://www.openvehicles.com/sites/default/files/glazed-builder/esp32.jpg' }}
    />
  );
}

const MyStack = createStackNavigator();
export default function StatusScreen() {
  return (
    <MyStack.Navigator>
      <MyStack.Screen
        name="My Status"
        component={StatusView}
        options={{
          headerLeft: () => <MenuIcon/>,
          headerRight: () => <ConnectionIcon/>
        }} />
    </MyStack.Navigator>
  );
}

//StatusScreen.navigationOptions = {
//  header: null,
//};
