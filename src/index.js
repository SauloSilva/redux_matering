/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';

import 'config/ReactotronConfig';
import 'config/DevToolsConfig';

import store from 'store';

const App = () => (
  <Provider store={store}>
    <View />
  </Provider>
);

export default App;
