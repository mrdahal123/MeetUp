import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SignUp from './Src/Screens/SignUp'
import { Provider } from 'react-redux'
import Store from './Src/Redux/Store'
const App = () => {
  return (
    <Provider store={Store}>
      <SignUp />
    </Provider>


  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})