// BottomTabNavigator.js
//
// Implements the bottom tab navigation.

import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBarIcon from '../components/TabBarIcon';
import StatusScreen from '../screens/StatusScreen';
import VehicleScreen from '../screens/VehicleScreen';
import LocationScreen from '../screens/LocationScreen';
import MessagingScreen from '../screens/MessagingScreen';
import SettingsScreen from '../screens/SettingsScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Status';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Status"
        component={StatusScreen}
        options={{
          title: 'Status',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-battery-full" />,
        }}
      />
      <BottomTab.Screen
        name="Vehicle"
        component={VehicleScreen}
        options={{
          title: 'Vehicle',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-car" />,
        }}
      />
      <BottomTab.Screen
        name="Location"
        component={LocationScreen}
        options={{
          title: 'Location',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-compass" />,
        }}
      />
      <BottomTab.Screen
        name="Messages"
        component={MessagingScreen}
        options={{
          title: 'Messages',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-chatboxes" />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-settings" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Status':
      return 'My Status';
    case 'Vehicle':
      return 'My Vehicle';
    case 'Location':
      return 'My Location';
    case 'Messages':
      return 'My Messages';
    case 'Settings':
      return 'My Settings';
  }
}
