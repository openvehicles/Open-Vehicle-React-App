import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    Root: {
      path: 'root',
      screens: {
        Status: 'status',
        Car: 'car',
        Location: 'location',
        Messaging: 'messages',
        Settings: 'settings'
      },
    },
  },
};
