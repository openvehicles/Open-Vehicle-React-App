// StatusScreen.js
//
// Implements the status screen
// This is a WebView, with the content dynamically loaded,
// to allow the greatest flexibility in display customisation.

import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import * as WebBrowser from 'expo-web-browser';
import { WebView } from 'react-native-webview';

function StatusView() {
  return (
    <WebView
      scalesPageToFit={false}
      bounces={false}
      scrollEnabled={false}
      showsHorizontalScrollIndicator={false}
      source={{ uri: 'https://www.openvehicles.com/sites/default/files/glazed-builder/esp32.jpg' }}
    />
  );
}

const MyStack = createStackNavigator();
export default function StatusScreen() {
  return (
    <MyStack.Navigator>
      <MyStack.Screen name="My Status" component={StatusView} />
    </MyStack.Navigator>
  );
}

//StatusScreen.navigationOptions = {
//  header: null,
//};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 30,
  },
  statusScreenFilename: {
    marginVertical: 7,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
