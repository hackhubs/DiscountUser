import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Subscriptions from '../screens/Subscriptions/Subscriptions';

const Stack = createStackNavigator();

const SubscriptionNavigator = () => {
  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{headerShown: false}}
      initialRouteName="Subscription">
      <Stack.Screen name="Subscription" component={Subscriptions} />
    </Stack.Navigator>
  );
};

export default SubscriptionNavigator;
