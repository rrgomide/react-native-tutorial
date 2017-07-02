import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bananas from './src/Bananas';
import Greeting from './src/Greeting';
import Blink from './src/Blink';

export default class App extends React.Component {
  render() {
    console.log('Rendering...');
    return (
      <View style={styles.container}>
        <Text>Olá, mundo!</Text>
        <Bananas />
        <Greeting name='Raphael' />
        <Greeting name='Marcelle' />
        <Blink text='piscando...' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
