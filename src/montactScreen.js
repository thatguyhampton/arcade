import React from 'react';
import { StyleSheet, WebView } from 'react-native';

export class MontactScreen extends React.Component {

  static navigationOptions = {
    title: 'Montact',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <WebView
        source={{uri: 'http://eli.marable-family.net/montact/'}}
      />
    );
  }
}
