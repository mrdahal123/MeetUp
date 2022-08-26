import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SignUp from './Src/Screens/Auth/Signin/Login';
import {Provider} from 'react-redux';
import Store from './Src/Redux/Store';
import StackNav from './Src/Navigation/StackNav';
import {NavigationContainer} from '@react-navigation/native';
const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
