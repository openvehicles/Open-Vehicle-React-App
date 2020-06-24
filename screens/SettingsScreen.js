// SettingsScreen.js
//
// Implements the settings screen
// This screen is intended to be used to control the
// settings for an individual vehicle.

import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';
import { Divider, Button } from 'react-native-elements';

import AddVehicle from '../containers/AddVehicle';

import MenuIcon from '../components/MenuIcon';
import ConnectionIcon from '../components/ConnectionIcon';

function SettingsView() {
  const navigation = useNavigation();

  return (
    <View>
    <Divider/>
    <Button
      title='Add a Vehicle'
      onPress={() => navigation.push('Add a Vehicle')}
    />
    </View>
  );
}

const MyStack = createStackNavigator();
export default function SettingsScreen() {
  return (
    <MyStack.Navigator>
      <MyStack.Screen
        name="My Settings"
        component={SettingsView}
        options={{
          headerLeft: () => <MenuIcon/>,
          headerRight: () => <ConnectionIcon/>
        }} />
      <MyStack.Screen
        name="Add a Vehicle"
        component={AddVehicle} />
    </MyStack.Navigator>
  );
}
