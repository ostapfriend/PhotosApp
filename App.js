import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { store, persistor } from './src/redux/store';
import AppNavigator from "./src/navigation/AppNavigator";

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <AppNavigator />
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
};

export default App;
