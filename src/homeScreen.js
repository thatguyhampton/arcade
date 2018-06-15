import React from 'react';
import { StyleSheet, StatusBar, View, Text, Button } from 'react-native';

export class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'The Arcade',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button title='Snake' onPress={() => navigate('Snake')} />
        <Button title='Tetris' onPress={() => navigate('Tetris')} />
        <Button title='Montact' onPress={() => navigate('Montact')} />
        <Button title='Triangle' onPress={() => navigate('Triangle')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
