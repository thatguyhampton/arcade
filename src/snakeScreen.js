import React from 'react';
import { AppRegistry, WebView } from 'react-native';

export class SnakeScreen extends React.Component {

  static navigationOptions = {
    title: 'Snake',
  };

  render() {
    return (
      <WebView
        source={{uri: 'http://helpfulsheep.com/snake-mobile/'}}
      />
    );
  }
}
