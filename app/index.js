import React, { Component } from 'react';
import { Root, Tabs } from './config/router';
import codePush from "react-native-code-push";

class App extends Component {
  render() {
    return <Root />;
  }
}

App = codePush(App);

export default App;
