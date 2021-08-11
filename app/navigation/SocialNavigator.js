import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Socialfeed from '../screens/Social/Socialfeed';

const Stack = createStackNavigator();

const SocialNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'modal',
      }}
      initialRouteName="Social">
      <Stack.Screen name="Social" component={Socialfeed} />
    </Stack.Navigator>
  );
};

export default SocialNavigator;
