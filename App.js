import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';

import Providers from './app/navigation';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({duration: 2000});
  }, []);

  return <Providers />;
};

export default App;
