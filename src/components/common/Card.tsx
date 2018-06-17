import React from 'react';

import { StyleSheet, View } from 'react-native';

interface Props {
  children?: JSX.Element[];
}

function Card({ children }: Props) {
  return (
    <View style={styles.card}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderBottomWidth: 0,
    borderColor: '#ddd',
    borderRadius: 2,
    borderWidth: 1,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
});

export { Card };
