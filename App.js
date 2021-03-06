// Open Vehicle React App
//
// A cross-platform mobile App to monitor and control Open Vehicles
// (using a plug-in architecture for vehicle API support, and a highly
// customisable approach to displays)

// Built using the React Native frameworks.
import * as React from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  Text } from 'react-native';

// Dark/Light Theme Support
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Redux state/database persisted storage
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import AsyncStorage from '@react-native-community/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from './reducers'
import thunk from 'redux-thunk';
import LoadingView from './components/LoadingView';

// Cached resources
import useCachedResources from './hooks/useCachedResources';

// Navigation and core pages
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';
import SideMenu from './components/SideMenu';

// Redux persistent configuration store
const persistConfig = {
 key: 'root',
 storage: AsyncStorage,
 stateReconciler: autoMergeLevel2
};
const pReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(pReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

// Stack navigation
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const window = Dimensions.get('window');

// The App itself
export default function App(props) {
  const isLoadingComplete = useCachedResources();
  const scheme = useColorScheme();
  const sidemenu = SideMenu();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <PersistGate loading={<LoadingView />} persistor={persistor}>
            <View style={styles.container}>
              {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
              <NavigationContainer
                theme={scheme === 'dark' ? DarkTheme : DefaultTheme}
                linking={LinkingConfiguration}>
                <Drawer.Navigator
                  mode="modal"
                  initialRouteName="Home"
                  drawerType="slide"
                  edgeWidth={window.width/5}
                  drawerContent={props => <SideMenu {...props} />} >
                  <Stack.Screen name="Root" component={BottomTabNavigator} />
                </Drawer.Navigator>
              </NavigationContainer>
            </View>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
