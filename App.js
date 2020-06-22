import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, SafeAreaView, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import AsyncStorage from '@react-native-community/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from './reducers'
import thunk from 'redux-thunk';

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';
import SideMenu from 'react-native-side-menu-updated';
import SideMenuContent from './components/SideMenuContent';
import LoadingView from './components/LoadingView';

const persistConfig = {
 key: 'root',
 storage: AsyncStorage,
 stateReconciler: autoMergeLevel2
};
const pReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(pReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

const Stack = createStackNavigator();

export default function App(props) {
  const isLoadingComplete = useCachedResources();
  const scheme = useColorScheme();
  const menu = SideMenuContent();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
      <PersistGate loading={<LoadingView />} persistor={persistor}>
      <SideMenu menu={menu}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
          <NavigationContainer
            theme={scheme === 'dark' ? DarkTheme : DefaultTheme}
            linking={LinkingConfiguration}>
            <Stack.Navigator>
              <Stack.Screen name="Root" component={BottomTabNavigator} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </SideMenu>
      </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
