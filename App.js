import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { APP_BACKGROUND_COLOR } from './app/common/constants/color';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: APP_BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
