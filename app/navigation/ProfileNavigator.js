import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Profile from '../screens/Profile/Profile';

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'modal',
      }}
      initialRouteName="ProfileScreen">
      <Stack.Screen name="ProfileScreen" component={Profile} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
