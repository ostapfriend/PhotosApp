import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

import PhotosScreen from '../screens/PhotosScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size, focused }) => {
                let iconName;
                if (route.name === 'Photos') {
                    iconName = 'photo';
                } else if (route.name === 'Favorites') {
                    iconName = 'heart';
                }
                const iconColor = focused ? 'black' : color;
                return <FontAwesome name={iconName} size={size} color={iconColor} />;
            },
        })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Photos" component={PhotosScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;

