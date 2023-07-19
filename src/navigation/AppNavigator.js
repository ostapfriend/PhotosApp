import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';

import PhotosScreen from '../screens/PhotosScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

// const PhotosStack = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="Photos" component={PhotosScreen} />
//   </Stack.Navigator>
// );
//
// const FavoritesStack = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="Favorites" component={FavoritesScreen} />
//   </Stack.Navigator>
// );

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

