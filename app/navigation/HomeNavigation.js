import React from 'react';
import {Image, View, TouchableOpacity, Text} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home/Home';

const Stack = createStackNavigator();

const HomeNavigation = ({navigation}) => {
  return (
    <Stack.Navigator presentation="card" initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{
          headerLeft: () => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginStart: 10,
                justifyContent: 'center',
              }}>
              <TouchableOpacity>
                <Image
                  source={require('../assets/menu.png')}
                  style={{width: 25, height: 25, marginEnd: 10}}
                />
              </TouchableOpacity>
              <Image
                source={require('../assets/discounticon.png')}
                style={{width: 50, height: 50}}
              />
            </View>
          ),
          headerTitle: ' ',
          headerRight: () => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginEnd: 10,
              }}>
              <TouchableOpacity
                onPress={() => console.log('notfy')}
                style={{marginEnd: 10}}>
                <Image
                  source={require('../assets/notification.png')}
                  style={{width: 25, height: 30}}
                />
              </TouchableOpacity>
              <Image
                source={require('../assets/card.png')}
                style={{width: 50, height: 50}}
              />
            </View>
          ),
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
