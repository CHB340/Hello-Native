/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, Text, StyleSheet, Button } from 'react-native';

const App = () => {
  const [message, setMessage] = React.useState('Hello, World!');

  const changeMessage = () => {
    setMessage('Hello from React Native!');
  };

  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>{message}</Text>
        <Button title="Change Message" onPress={changeMessage} />
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;


