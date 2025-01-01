import React from 'react';
import RootStack from './src/navigation/RootStack';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
  );
};

export default App;
