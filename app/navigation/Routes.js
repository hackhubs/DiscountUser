import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthNavigation from './AuthNavigation';

const Routes = () => {
  //   const [user, setUser] = useState(AuthContext);
  //   const [initializing, setInitializing] = useState(true);

  //   // Handle user state changes
  //   function onAuthStateChanged(user) {
  //     setUser(user);
  //     if (initializing) {
  //       setInitializing(false);
  //     }
  //   }

  //   useEffect(() => {
  //     console.log('routes');
  //     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //     return subscriber; // unsubscribe on unmount
  //   }, []);

  //   if (initializing) {
  //     return null;
  //   }

  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
};

export default Routes;
