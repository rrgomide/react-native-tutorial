import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Gretting extends Component {
  render() {
    return(
      <Text>Hello, {this.props.name}!</Text>
    );
  }
}
