import React from 'react';

import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Props {
  text: string;
  onPress?(): void;
}

function Button({ text, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderColor: '#007aff',
    borderRadius: 5,
    borderWidth: 1,
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  text: {
    // fontFamily: FONT_FAMILY,
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    paddingBottom: 10,
    paddingTop: 10,
  },
});

export { Button };
