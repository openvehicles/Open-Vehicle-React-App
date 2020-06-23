// LinkingConfiguration.js
//
// Implements the linking configuration.

import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    Root: {
      path: 'root',
      screens: {
        Status: 'status',
        Vehicle: 'vehicle',
        Location: 'location',
        Messaging: 'messages',
        Settings: 'settings'
      },
    },
  },
};
