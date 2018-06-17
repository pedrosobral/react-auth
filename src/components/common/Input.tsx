import React from 'react';

import { StyleSheet, Text, TextInput, View } from 'react-native';

export interface InputProps {
  label?: string;

  /**
   * The value to show for the text input. TextInput is a controlled component,
   * which means the native value will be forced to match this value prop if provided.
   * For most uses this works great, but in some cases this may cause flickering -
   * one common cause is preventing edits by keeping value the same.
   * In addition to simply setting the same value, either set editable={false},
   * or set/update maxLength to prevent unwanted edits without flicker.
   */
  value?: string;

  /**
   * Callback that is called when the text input's text changes.
   * Changed text is passed as an argument to the callback handler.
   */
  onChangeText?: (text: string) => void;

  /**
   * The string that will be rendered before text input has been entered
   */
  placeholder?: string;
}

const Input: React.SFC<InputProps> = ({ label, ...props }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        {...props}
        autoCapitalize="none"
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    height: 40,
  },
  input: {
    color: 'blue',
    flex: 2,
    fontSize: 18,
    height: 20,
    lineHeight: 23,
    paddingLeft: 5,
    paddingRight: 5,
    width: 200,
  },
  label: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 20,
  },
});

export { Input };
