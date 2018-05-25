import React from 'react';
import { AppRegistry, StyleSheet, StatusBar } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import { Finger } from './src/renderers';
import { MoveFinger } from './src/systems';

export default class App extends React.PureComponent {
  render() {
    return (
      <GameEngine
        style={styles.container}
        systems={[MoveFinger]}
        entities={{
          1: { position: [40, 200], renderer: <Finger />},
          2: { position: [100, 200], renderer: <Finger />},
          3: { position: [160, 200], renderer: <Finger />},
          4: { position: [220, 200], renderer: <Finger />}
        }}>
        <StatusBar hidden={true} />
      </GameEngine>
      // <View style={styles.container}>
      //   <Text>The Arcade</Text>
      //   <Text>Open up App.js to start working on your app!</Text>
      //   <Text>Changes you make will automatically reload.</Text>
      //   <Text>Shake your phone to open the developer menu.</Text>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
