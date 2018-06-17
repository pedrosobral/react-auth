import React from 'react';

import { Header } from './components/common';

export interface Props {

}

export interface State {

}

export default class App extends React.Component<Props, State> {

  // tslint:disable-next-line:member-access
  render() {
    return (
      <Header title="albums" />
    );
  }
}