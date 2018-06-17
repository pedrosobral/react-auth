import React from 'react';

import { StyleSheet, View } from 'react-native';

interface Props {
  children?: JSX.Element;
}

function CardSection({ children }: Props) {
  return (
    <View style={styles.section}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#fff',
    borderBottomWidth: 0,
    borderColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5,
    position: 'relative',
  },
});

export { CardSection };
