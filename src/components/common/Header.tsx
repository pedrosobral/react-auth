import React from 'react';

import { StyleSheet, Text, View} from 'react-native';

export interface Props {
  title: string;
}

function Header({ title }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#1194f6',
    elevation: 2,
    height: 66,
    justifyContent: 'center',
    paddingTop: 15,
    position: 'relative',
    shadowColor: 'black',
    shadowOpacity: 0.2,
  },
  header: {
    color: 'white',
    fontFamily: 'Poppins',
    fontSize: 36,
  },
});

export { Header };
