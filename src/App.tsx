import React from 'react';

import { Header } from './components/common';

export default class App extends React.Component<{}, object> {
  render() {
    return (
      <Header title="albums" />
    );
  }
}
