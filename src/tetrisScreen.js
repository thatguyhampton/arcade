import React from 'react';
import { StyleSheet, WebView } from 'react-native';

export class TetrisScreen extends React.Component {

  static navigationOptions = {
    title: 'Tetris',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <WebView
        source={{uri: 'http://htmltetris.com/'}}
      />
    );
  }
}
