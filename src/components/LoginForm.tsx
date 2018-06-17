import React from 'react';
import { TextInput } from 'react-native';

import { Button, Card, CardSection, Input } from './common';

export interface LoginFormProps {
  email?: string;
}

export interface LoginFormState {
  email: string;
  password: string;
}

export default class LoginForm extends React.Component<LoginFormProps, LoginFormState> {
  constructor(props: LoginFormProps) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@gmail.com"
            value={this.state.email}
            onChangeText={(email) => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
          />
        </CardSection>

        <CardSection>
          <Button text="Log in" />
        </CardSection>
      </Card>
    );
  }
}
