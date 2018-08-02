import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Row = ({label = "", content = "-"}) => {
  return (
    <View style={styles.row}>
      <Text style={
        [
          styles.column,
          styles.label,
          (label.length > 8) ? styles.longLabel : null
        ]}>{label}: </Text>
      <Text style={[styles.column, styles.content]}>{ content }</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingTop: 3,
    paddingBottom: 3,
    borderWidth: 1,
    borderColor: '#c5c5c5'
  },
  column: {
    fontSize: 18,
    paddingLeft: 5
  },
  label: {
    fontWeight: 'bold',
    flex:1
  },
  longLabel: {
    fontSize: 12
  },
  content: {
    fontWeight: 'bold',
    flex:3
  }
});

export default Row;