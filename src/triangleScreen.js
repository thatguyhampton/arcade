import React from 'react';
import { StyleSheet, WebView } from 'react-native';

export class TriangleScreen extends React.Component {

  static navigationOptions = {
    title: 'Triangle',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <WebView
        source={{uri: 'http://192.168.2.11:8080/'}}
      />
    );
  }
}
