/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const Input = ({holder}) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={holder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eceff2',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    marginVertical: 17,
  },
});

export {Input};
