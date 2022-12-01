import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import ImmersiveMode from './components/ImmersiveMode';

const App = () => {
  return <ImmersiveMode />;
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
