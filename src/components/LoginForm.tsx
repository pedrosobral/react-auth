import React from 'react';
import { TextInput } from 'react-native';

import { Button, Card, CardSection, Input } from './common';

export interface LoginFormProps {
  email?: string;
}

export interface LoginFormState {
  email: string;
}

export default class LoginForm extends React.Component<LoginFormProps, LoginFormState> {
  constructor(props: LoginFormProps) {
    super(props);

    this.state = {
      email: '',
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

        <CardSection />

        <CardSection>
          <Button text="Log in" />
        </CardSection>
      </Card>
    );
  }
}
