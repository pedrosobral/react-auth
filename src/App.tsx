import React from 'react';
import { View } from 'react-native';

import { Header } from './components/common';

import LoginForm from './components/LoginForm';

export default class App extends React.Component<{}, object> {
  render() {
    return (
      <View>
        <Header title="albums" />
        <LoginForm />
      </View>
    );
  }
}
