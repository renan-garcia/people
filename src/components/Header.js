import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => (
  <View>
    <Text>{ props.title }</Text>
  </View>
);

export default Header;