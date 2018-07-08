import React from 'react';
import { StyleSheet, View, AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import { AdMobBanner } from 'react-native-admob';


import createStore from './store';
import Application from './Components/App';
import Header from './Components/Header';

const store = createStore();

export default class App extends React.Component {
  render() {
    AsyncStorage.clear();
    return (
      <Provider store={store}>
        <View style={mainStyle.container}>
          <Header />
          <Application />
        </View>
      </Provider>
    );
  }
}




const mainStyle = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
});