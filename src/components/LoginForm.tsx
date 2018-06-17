import React from 'react';
import { TextInput } from 'react-native';

import { Button, Card, CardSection, Input } from './common';

export interface LoginFormProps {
  text?: string;
}

export interface LoginFormState {
  text: string;
}

export default class LoginForm extends React.Component<LoginFormProps, LoginFormState> {
  constructor(props: LoginFormProps) {
    super(props);

    this.state = {
      text: '',
    };
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            value={this.state.text}
            onChangeText={(text) => this.setState({ text })}
          />
        </CardSection>

        <CardSection />

        <CardSection>
          <Button text="Log in" />
        </CardSection>
      </Card>
    );
  }
}
