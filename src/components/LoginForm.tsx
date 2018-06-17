import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { Button, Card, CardSection, Input } from './common';

export interface LoginFormProps {
  email?: string;
}

export interface LoginFormState {
  email: string;
  password: string;
  error?: string;
}

export default class LoginForm extends React.Component<LoginFormProps, LoginFormState> {

  constructor(props: LoginFormProps) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  onButtonPress() {
    setTimeout(() => this.setState({ error: 'Error' }), 1000);
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

        <Text style={styles.error}>{this.state.error}</Text>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)} text="Log in" />
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 12,
    padding: 5,
  },
});
