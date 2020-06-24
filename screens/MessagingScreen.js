// MessagingScreen.js
//
// Implements the messaging screen
// It displays a messaging/chat style UI to allow
// the user to receive messages from the vehicle, as
// well as issue commands.

import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

// We are based on the GiftedChat library
import { GiftedChat } from 'react-native-gifted-chat'
import MenuIcon from '../components/MenuIcon';
import ConnectionIcon from '../components/ConnectionIcon';

function MessagingView() {
  const [messages, setMessages] = useState([
    /**
     * Mock message data
     */
    // example of system message
    {
      _id: 0,
      text: 'Vehicle Messaging',
      createdAt: new Date().getTime(),
      system: true
    },
    // example of chat message
    {
      _id: 1,
      text: 'Welcome to OVMS!',
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: 'Electric Vehicle'
      }
    }
  ]);

  // helper method that is sends a message
  function handleSend(newMessage = []) {
    setMessages(GiftedChat.append(messages, newMessage));
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={newMessage => handleSend(newMessage)}
      user={{ _id: 1 }}
    />
  );
}

const MyStack = createStackNavigator();
export default function MessagingScreen() {
  return (
    <MyStack.Navigator>
      <MyStack.Screen
        name="My Messages"
        component={MessagingView}
        options={{
          headerLeft: () => <MenuIcon/>,
          headerRight: () => <ConnectionIcon/>
        }} />
    </MyStack.Navigator>
  );
}
