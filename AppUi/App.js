import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Drawer from './src/Screens/Drawer'
import Cards from './src/Screens/Tabs'

export default function App() {
  return (
    <View>
      <Drawer />
      <Text>thar</Text>
      {/* <Cards /> */}
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
